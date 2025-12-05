import { useState } from "react";
import { postCourse } from "../../services/course"; 
function AddCourse() {
    const [course, setCourse] = useState(
        { name: '', 
          code: '' 
        }
    );
    function onsubmit(e){
        e.preventDefault();
        console.log(course);
        postCourse(course).then(data => {
            console.log('Course added successfully:', data);
        }).catch(error => {
            console.error('Error adding course:', error);
        });
    }

    function onChange(e){
        const input = e.target;
        const name = input.name;
        const value = input.value; 
        course[name] = value;
        console.log(course);
        setCourse(course)
    }

    return(
        <form onSubmit={onsubmit}>
            <h2>Add New Course</h2>
            <div>
                <label>Course Name:</label>
                <input type="text" name="name" required onChange={onChange} />
            </div>
            <div>
                <label>Course Code:</label>
                <input type="text" name="code" required onChange={onChange} />
            </div>
            <button type="submit">Add</button>
        </form>
    );
}
export default AddCourse;