import { useParams } from 'react-router-dom';
function CourseDetail() {
   const params = useParams();
   return (
       <div>
           <h2>Course Detail Page</h2>
           <p>Course ID: {params.id}</p>
           <p>Course Name: {params.name}</p>
            <p>Course Code: {params.code}</p> 
       </div>
   );
}

export default CourseDetail;
