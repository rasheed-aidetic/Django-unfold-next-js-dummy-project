<html>
<head>
</head>
<body>
  <h1>Blog Application</h1>
  <p>This project is a blog application built using the Turbo boilerplate, which integrates Django for the backend and Next.js for the frontend. The application allows authenticated users to view and comment on blog posts.</p>
  
  <h2>Features</h2>
  <ul>
    <li><strong>User Authentication:</strong> Users can sign up and log in to access the blog content.</li>
    <li><strong>Blog Viewing:</strong> Authenticated users can view detailed blog posts.</li>
    <li><strong>Commenting:</strong> Authenticated users can add comments to existing blog posts.</li>
    <li><strong>Admin Interface:</strong> Blog posts are managed through the Django admin panel.</li>
  </ul>
  
  <h2>Prerequisites</h2>
  <p>Ensure you have the following installed on your system:</p>
  <ul>
    <li><a href="https://www.docker.com/get-started">Docker</a></li>
    <li><a href="https://docs.docker.com/compose/install/">Docker Compose</a></li>
  </ul>
  
  <h2>Getting Started</h2>
  <ol>
    <li>
      <strong>Clone the Repository:</strong>
      <pre><code>git clone https://github.com/unfoldadmin/turbo.git
cd turbo</code></pre>
    </li>
    <li>
      <strong>Configure Environment Variables:</strong>
      <p>Create and configure the necessary environment files for both the backend and frontend as specified in the Turbo documentation.</p>
    </li>
    <li>
      <strong>Build and Start the Services:</strong>
      <pre><code>docker-compose up --build</code></pre>
      <p>This command will build and start both the backend and frontend services.</p>
    </li>
    <li>
      <strong>Create a Superuser:</strong>
      <pre><code>docker-compose exec api poetry run python src/manage.py createsuperuser</code></pre>
      <p>Follow the prompts to set up the superuser account.</p>
    </li>
    <li>
      <strong>Access the Application:</strong>
      <ul>
        <li><strong>Frontend:</strong> Visit <a href="http://localhost:3000">http://localhost:3000</a> to access the frontend.</li>
        <li><strong>Backend (Django Admin Panel):</strong> Visit <a href="http://localhost:8000/admin">http://localhost:8000/admin</a> and log in with the superuser credentials to manage blog posts.</li>
      </ul>
    </li>
  </ol>
  
  <h2>Usage</h2>
  <ul>
    <li><strong>Home Page:</strong> New users can sign up, and existing users can log in.</li>
    <li><strong>Blog Viewing:</strong> After logging in, users can view available blog posts.</li>
    <li><strong>Commenting:</strong> Users can add comments to blog posts through the frontend interface.</li>
    <li><strong>Creating Blog Posts:</strong> Blog posts can be created and managed through the Django admin panel at <a href="http://localhost:8000/admin">http://localhost:8000/admin</a>.</li>
  </ul>
  
  <h2>Technologies Used</h2>
  <ul>
    <li><strong>Backend:</strong> Django, Django REST Framework</li>
    <li><strong>Frontend:</strong> Next.js, Tailwind CSS</li>
    <li><strong>Authentication:</strong> JWT Tokens</li>
  </ul>
  
  <h2>Contributing</h2>
  <ol>
    <li>Fork the repository.</li>
    <li>Create a new branch: <code>git checkout -b feature/YourFeature</code></li>
    <li>Make your changes and commit them: <code>git commit -m 'Add some feature'</code></li>
    <li>Push to the branch: <code>git push origin feature/YourFeature</code></li>
    <li>Submit a pull request.</li>
  </ol>
  
  <h2>License</h2>
  <p>This project is licensed under the MIT License. See the <code>LICENSE</code> file for details.</p>
</body>
</html>
