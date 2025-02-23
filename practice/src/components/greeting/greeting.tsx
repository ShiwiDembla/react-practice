export default function Greeting({ name = "Guest" }: { name?: string }) {
  return (
    <div>
      <h3>Hello {name}</h3>
    </div>
  );
}
