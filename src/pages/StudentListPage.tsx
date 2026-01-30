import StudentList from "../components/StudentList";
import AddStudentForm from '../components/AddStudentForm';

const StudentListPage = () => {
return (
    
<section>


    

<StudentList />
<h1>Student List Page</h1>
 <div style={{ width: "50%", float: "left" }}>
<hr />
<AddStudentForm />
</div>
</section>
);
};
export default StudentListPage;