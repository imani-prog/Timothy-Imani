export default function Footer() {
  return (
    <footer className="bg-gray-300">
      <div className="border-t border-slate-200 bg-gray-300">
        <p className="text-center py-6">
          &copy;
          {new Date().getFullYear()} Timothy Imani.
        </p>
      </div>
    </footer>
  );
}