import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Avatar,
  Box,
  CircularProgress,
  Grid,
} from '@mui/material';

const API_BASE = 'https://blog-backend-1-p3yg.onrender.com';

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${API_BASE}/api/blogs`);
        setBlogs(res.data);
      } catch (err) {
        console.error('Error fetching blogs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Centered Heading */}
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
        Latest Blogs
        <span
          style={{
            position: 'absolute',
            left: '50%',
            bottom: 0,
            width: '56px',
            height: '3px',
            backgroundColor: '#d4c291',
            transform: 'translateX(-50%)',
            borderRadius: '2px',
          }}
        />
      </h2>

      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
          <CircularProgress />
        </Box>
      ) : blogs.length === 0 ? (
        <Typography align="center" color="text.secondary">
          No blogs found.
        </Typography>
      ) : (
        <Grid
          container
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {blogs.map((blog) => (
            <Box
              key={blog._id}
              sx={{
                flex: {
                  xs: '0 0 100%',    // 1 per row mobile
                  sm: '0 0 50%',     // 2 per row tablet
                  md: '0 0 33.33%',  // 3 per row desktop
                },
                maxWidth: {
                  xs: '100%',
                  sm: '50%',
                  md: '33.33%',
                },
                padding: '0 12px',
                boxSizing: 'border-box',
                mb: 4,
              }}
            >
              <Card
                elevation={3}
                sx={{
                  transition: '0.3s',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    boxShadow: 6,
                  },
                }}
              >
                <Link to={`/blog/${blog.slug}`} style={{ textDecoration: 'none' }}>
                  {blog.image && (
                    <CardMedia
                      component="img"
                      height="200"
                      width="100%"
                      image={`${API_BASE}${blog.image}`}
                      alt={blog.title}
                    />
                  )}
                </Link>

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    component={Link}
                    to={`/blog/${blog.slug}`}
                    sx={{
                      textDecoration: 'none',
                      color: 'text.primary',
                      fontWeight: 600,
                      '&:hover': {
                        color: '#c0b596',
                      },
                    }}
                    gutterBottom
                  >
                    {blog.title}
                  </Typography>

                  <Box display="flex" alignItems="center" mt={2}>
                    <Avatar sx={{ bgcolor: '#c0b596', mr: 1 }}>
                      {blog.author?.charAt(0).toUpperCase() || 'A'}
                    </Avatar>
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        {blog.author || 'Anonymous'}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Grid>
      )}
    </Container>
  );
}
