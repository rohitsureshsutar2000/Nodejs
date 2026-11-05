const authRoutes = require('./auth/routes/authRoutes');
const userRoutes = require('./user/routes/userRoutes');
const clientRoutes = require('./client/routes/clientRoutes');

exports.allRoutes = (app) => {
    app.use('/api/auth', authRoutes);
    app.use('/api/user', userRoutes);
    app.use('/api/client', clientRoutes);
}