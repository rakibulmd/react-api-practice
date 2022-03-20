import "./App.css";
import Blog from "./component/Blog/Blog";
import Mobile from "./component/Mobile/Mobile";
import Todos from "./component/ToDos/Todos";

function App() {
    return (
        <div className="App">
            <article className="blog">
                <h2>This is a article title</h2>
                <p style={{ color: "red" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                </p>
            </article>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "1rem",
                }}
            >
                <Blog heading={"this is heading 1"} author={"titan"}></Blog>
                <Blog heading={"this is heading 2"} author={"rakib"}></Blog>
                <Blog heading={"this is heading 3"} author={"bijoy"}></Blog>
            </div>
            <District name="NoaKhali" speciality="vibag"></District>
            <District name="B-baria" speciality="Judda"></District>
            <District></District>
            <Mobile></Mobile>
            <Todos></Todos>
        </div>
    );
}

const DistrictStyle = {
    backgroundColor: "coral",
    margin: "20px",
    borderRadius: "20px",
    border: "1px solid red",
};

const District = (props) => {
    const { name, speciality } = props;
    return (
        <div className="district" style={DistrictStyle}>
            <h2>Name: {name} </h2>
            <p>Speciality: {speciality}</p>
        </div>
    );
};

export default App;
