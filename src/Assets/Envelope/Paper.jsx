export default function Paper({ children, onClick }) {
  return (
    <>
      <div className="Paper" onClick={onClick}>
        {children}
      </div>
    </>
  );
}
