 interface Props {
     children: React.ReactNode
 }
 
 export default function FormSection({ children }) {
     return (
         <div className="w-full">
             {children}
         </div>
     )
 }