'use client'; // Client Component

import { useState, useEffect } from 'react';

export default function FetchClientPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await response.json();
        setData(json.slice(0, 10)); // Fetch only the first 10 posts
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-center text-lg text-gray-700">Loading...</p>;

  return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">Client-Side Fetched Data</h1>
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
        <thead className="bg-blue-100">
          <tr>
            <th className="px-6 py-3 border-b text-left text-blue-600">Title</th>
            <th className="px-6 py-3 border-b text-left text-blue-600">Body</th>
          </tr>
        </thead>
        <tbody>
          {data.map((post) => (
            <tr key={post.id} className="border-b hover:bg-blue-50">
              <td className="px-6 py-4 text-gray-800">{post.title}</td>
              <td className="px-6 py-4 text-gray-700">{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
