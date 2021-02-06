// Styled-JSX
// This Style is limited to this component only
export default function Home() {
  const color = 'yellow';
  return (
    <div>

      <h1 className="title">Hello World</h1>
      <p>Hii </p>
      <style jsx>
        {`
          .title{
            color: red;
          }
          p{
            color: ${color};
          }
        `}
      </style>
    </div>
    
  )
}
