import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import {
  TextField, Button, Paper, Typography, Box
} from '@mui/material';

import axios from 'axios';

const API_BASE = 'https://blog-backend-1-p3yg.onrender.com/api';
const API_BASE_IMG = 'https://blog-backend-1-p3yg.onrender.com';


export default function BlogForm() {
  const { postId } = useParams();
  const navigate = useNavigate();

  const {
    register, handleSubmit, control, reset, setValue,
    formState: { errors }
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  // Load blog post data for editing
  useEffect(() => {
    if (postId && postId !== 'new') {
      setLoading(true);
      axios.get(`${API_BASE}/blogs/${postId}`)
        .then(res => {
          const { title, author, body, image, slug } = res.data;
          reset({ title, author, body, slug });

          if (image) {
            setImagePreview(`${API_BASE_IMG}${image}`);
          } else {
            setImagePreview(null);
          }
        })
        .catch(() => {
          alert('Failed to load blog post');
          reset({ title: '', author: '', body: '', slug: '' });
          setImagePreview(null);
        })
        .finally(() => setLoading(false));
    } else {
      reset({ title: '', author: '', body: '', slug: '' });
      setImagePreview(null);
    }
  }, [postId, reset]);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('slug', data.slug);
      formData.append('author', data.author || 'Anonymous');
      formData.append('body', data.body);
      if (data.image?.length > 0) {
        formData.append('image', data.image[0]);
      }

      if (postId && postId !== 'new') {
        await axios.put(`${API_BASE}/blogs/${postId}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
      } else {
        await axios.post(`${API_BASE}/blogs`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
      }

      navigate('/admin/blog');
    } catch (error) {
      console.error(error);
      alert('Error saving blog post');
    } finally {
      setLoading(false);
    }
  };

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImagePreview(URL.createObjectURL(e.target.files[0]));
      setValue('image', e.target.files);
    }
  };

  return (
    <Paper sx={{ maxWidth: 700, margin: 'auto', marginTop:"30px", p: 3, bgcolor: 'white', color: 'black' }}>
      <Typography variant="h5" mb={3}>
        {postId && postId !== 'new' ? 'Edit Blog Post' : 'Add New Blog Post'}
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" noValidate>
        <TextField
          label="Title"
          fullWidth
          margin="normal"
          {...register('title', { required: 'Title is required' })}
          error={!!errors.title}
          helperText={errors.title?.message}
        />

        <TextField
          label="Slug"
          fullWidth
          margin="normal"
          {...register('slug', {
            required: 'Slug is required',
            pattern: {
              value: /^[a-z0-9-_]+$/,
              message: 'Slug can only contain lowercase letters, numbers, hyphens, and underscores',
            }
          })}
          error={!!errors.slug}
          helperText={errors.slug?.message}
          placeholder="example-slug_123"
        />

        <TextField
          label="Author"
          fullWidth
          margin="normal"
          {...register('author')}
        />

        <Controller
          name="body"
          control={control}
          defaultValue=""
          rules={{ required: 'Body content is required' }}
          render={({ field }) => (
            <>
              <Typography variant="subtitle1" mt={2}>Body</Typography>
              <TextField
                {...field}
                multiline
                minRows={6}
                fullWidth
                placeholder="Write your blog content here..."
                error={!!errors.body}
                helperText={errors.body?.message}
                variant="outlined"
                sx={{ mt: 1 }}
              />
            </>
          )}
        />

        <Box mt={3}>
          <Typography variant="subtitle1">Upload Image</Typography>
          <input
            type="file"
            accept="image/*"
            onChange={onImageChange}
            style={{ margin: '10px 0' }}
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              style={{ maxWidth: '100%', maxHeight: 200, borderRadius: 4 }}
            />
          )}
        </Box>

        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={loading}
          sx={{ mt: 3 }}
        >
          {loading ? 'Saving...' : 'Save'}
        </Button>

        <Button
          variant="outlined"
          color="secondary"
          onClick={() => navigate('/blog')}
          sx={{ mt: 3, ml: 2 }}
          disabled={loading}
        >
          Cancel
        </Button>
      </form>
    </Paper>
  );
}
