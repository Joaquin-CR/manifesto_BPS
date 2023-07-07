export default function Modal() {
  const content = (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-96">
        <div className="bg-white p-2 rounded">Modal</div>
      </div>
    </div>
  );
  return <div>Modal</div>;
}
