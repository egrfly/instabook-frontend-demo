import { Link } from 'react-router-dom';

function Home() {
	return (
		<main className="container-fluid pt-6 py-4 text-center">
      <h1 className="display-4">Welcome to Instabook</h1>
      <Link role="button" to="/users" className="btn btn-primary ms-0 ms-sm-2 mt-2 mt-sm-0">Users 🔍</Link>
      <Link role="button" to="/books" className="btn btn-primary ms-0 ms-sm-2 mt-2 mt-sm-0">Books 🔍</Link>    
    </main>
	);
}

export default Home;
