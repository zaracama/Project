export default function Submit({ message }) {
   return (
     <>
       <button type="submit" className="btn btn-primary">
         {message}
       </button>
     </>
   );
 }