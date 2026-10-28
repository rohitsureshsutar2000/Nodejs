const authRoutes = require('./auth/routes/authRoutes');
const userRoutes = require('./user/routes/userRoutes');

exports.allRoutes = (app) => {
    app.use('/api/auth', authRoutes);
    app.use('/api/user', userRoutes);
}