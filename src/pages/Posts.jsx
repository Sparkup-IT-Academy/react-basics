import axios from 'axios';

export default function Posts() {
    async function handleClick() {
        const response = await axios.delete('https://jsonplaceholder.typicode.com/posts/1', {
            id: 5,
            title: 'Something'
        })  
        console.log(response);
    }
  return (
    <>
        <div>These are the posts</div>
        <button onClick={handleClick} className='bg-blue-500 text-white px-5 py-2 rounded-md'>Post to api</button>
    </>
  )
}
