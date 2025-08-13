import React, { useEffect, useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  IconButton, Button, Typography
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_BASE = 'https://blog-backend-1-p3yg.onrender.com/api';
const API_BASE_IMG = 'https://blog-backend-1-p3yg.onrender.com';

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(`${API_BASE}/blogs`);
      setBlogs(res.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  const deleteBlog = async (id) => {
    if (!window.confirm('Are you sure you want to delete this blog?')) return;
    try {
      await axios.delete(`${API_BASE}/blogs/${id}`);
      fetchBlogs();
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <Paper sx={{ p: 2, bgcolor: 'white', color: 'black', maxWidth: 1000, margin: 'auto' }}>
      <Typography variant="h4" mb={2} mt={6}>Blog Posts</Typography>
      <Button variant="contained" color="primary" onClick={() => navigate('/admin/blog/new')} sx={{ mb: 2 }}>
        Add New Blog
      </Button>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Image</TableCell> {/* Image column */}
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {blogs.map((blog) => (
              <TableRow key={blog._id}>
                <TableCell>{blog.title}</TableCell>
                <TableCell>{blog.author}</TableCell>
                <TableCell>{new Date(blog.createdAt).toLocaleDateString()}</TableCell>
                
                <TableCell>
                  {blog.image ? (
                    <>
                      <img
                        src={`${API_BASE_IMG}${blog.image}`}
                        alt="Blog"
                        style={{ width: 60, height: 40, objectFit: 'cover', borderRadius: 4 }}
                      />
                      <div style={{ fontSize: '0.75rem', wordBreak: 'break-all', marginTop: 4 }}>
                        {`${API_BASE_IMG}${blog.image}`}
                      </div>
                    </>
                  ) : (
                    'No Image'
                  )}
                </TableCell>

                <TableCell align="right">
                  <IconButton color="primary" onClick={() => navigate(`/admin/blog/${blog._id}`)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error" onClick={() => deleteBlog(blog._id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            {blogs.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} align="center">No blogs found.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
