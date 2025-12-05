import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home.jsx';
import CourseList from './courses/CourseList.jsx';
import StudentList from './students/StudentList.jsx';
import GradeList from './grades/GradeList.jsx';
import CourseDetail from './courses/CourseDetail.jsx';
import AddCourse from './courses/AddCourse.jsx';

function AppNavigation() {
   return (
       <>
       <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/courses" element={<CourseList />} />
           <Route path="/students" element={<StudentList />} />
           <Route path="/grades" element={<GradeList />} />
           <Route path='/courses/:id/:name/:code' element={<CourseDetail />} />
           <Route path='/courses/add' element={<AddCourse />} />
       </Routes>
       </>
   );
}

function WrongNavigation() {
   return (
       <nav>
           <a href="/">Home</a>
           <a href="/courses">Courses</a>
           <a href="/students">Students</a>
           <a href="/grades">Grades</a>
       </nav>
   );
}

function CorrectNavigation() {
   return (
       <nav>
           < Link to="/">Home</Link>
           < Link to="/courses">Courses</Link>
           < Link to="/students">Students</Link>
           < Link to="/grades">Grades</Link>
       </nav>
   );
}


export { AppNavigation, WrongNavigation, CorrectNavigation };