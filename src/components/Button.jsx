export default function Button({children, theme}) {

  return (
    <button style={{
        padding: '10px 20px',
        borderRadius: '10px',
    }} className={theme === 'dark' ? 'bg-black text-white' : 'bg-blue-500 text-white'}>{ children }</button>
  )
}