import {Link} from "react-router-dom";


const CourseList = (props) => {

    const course = props.course;

    return (
        <div className="course-list">
            <h2>Here it is: </h2>
            {course.map((course) => (
                <div className="course-preview" key={course.id}>
                    
                        <h2>{course.subject}{course.number}</h2>
                        <p>Content: {course.content}</p>
                
                </div>
                    
                ))}
        </div>
      );
}
 
export default CourseList;