export default function Friend({ friend }) {
  const { name, email } = friend;
  return (
    <div className="Box">
      <h2>Name:{name}</h2>
      <p>Email:{email}</p>
    </div>
  );
}
