import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Container, Typography, CircularProgress, Avatar, Box, Button
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const API_BASE = 'https://blog-backend-1-p3yg.onrender.com';

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`${API_BASE}/api/blogs`);
        const found = res.data.find((item) => item.slug === slug);
        if (!found) {
          alert('Blog not found');
          navigate('/blog');
        } else {
          setBlog(found);
        }
      } catch (err) {
        console.error('Error fetching blog:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug, navigate]);

  if (loading) {
    return (
      <Container maxWidth="md" className="py-12 text-center">
        <CircularProgress />
        <Typography variant="h6" mt={2}>Loading blog post...</Typography>
      </Container>
    );
  }

  if (!blog) return null;

  return (
    <Container maxWidth="md" className="py-12">
      {/* Back button */}
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate('/blog')}
        variant="text"
        sx={{ mb: 2 }}
      >
        Back to Blogs
      </Button>

      {/* Blog title */}
    <h2
        style={{
          fontSize: '2.25rem',
          fontWeight: 900,
          color: '#2d2d2d',
          display: 'inline-block',
          position: 'relative',
          paddingBottom: '0.5rem',
          margin: '1rem auto 2rem',
          textAlign: 'center',
          width: '100%',
        }}
      >
        {blog.title}
      </h2>

     
      {/* Blog image */}
      {blog.image && (
        <img
          src={`${API_BASE}${blog.image}`}
          alt={blog.title}
          className="w-full max-h-[500px] object-cover rounded-lg mb-6"
        />
      )}

      {/* Blog content */}
      <Typography
        variant="body1"
        component="div"
        className="leading-relaxed text-gray-800"
        sx={{
          '& p': { marginBottom: 2 },
          '& strong': { fontWeight: 'bold' },
        }}
        dangerouslySetInnerHTML={{ __html: blog.body.replace(/\n/g, '<br/>') }}
      />
       {/* Author info and date */}
      <Box className="flex items-center gap-4 mb-6">
        <Avatar sx={{ width: 50, height: 50 }}>
          {blog.author?.charAt(0).toUpperCase() || 'A'}
        </Avatar>
        <div>
          <Typography variant="subtitle1" className="text-gray-700">
            {blog.author || 'Anonymous'}
          </Typography>
          <Typography variant="body2" className="text-gray-500">
            {new Date(blog.createdAt).toLocaleDateString()}
          </Typography>
        </div>
      </Box>

    </Container>
  );
}
