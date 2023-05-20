import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import data from "../../Data.js";
import "./notes.scss";

const Notes = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { branch, year } = useParams();

  const [isNotes, setIsNotes] = useState(true)

  const [sem, setSem] = useState("");
  const [notes, setNotes] = useState([]);

  const [allNotes, setAllNotes] = useState([]);

  const [subject, setSubject] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [allSubjects, setAllSubjects] = useState([])

  const [filterYear, setFilterYear] = useState();

  useEffect(() => {
    if (location.pathname.includes("/notes")) {
      setNotes(
        data.filter(
          (x) =>
            x.category === "notes" &&
            x.department === branch &&
            x.year === parseInt(year, 10)
        )
      );
      setIsNotes(true)
    } else {
      setNotes(
        data.filter(
          (x) =>
            x.category === "questionPaper" &&
            x.department === branch &&
            x.year === parseInt(year, 10)
        )
      );
      setIsNotes(false)
    }
  }, [branch, year]);

  useEffect(() => {
    notes && setAllSubjects(notes.map((note) => note.subject));
    setAllNotes(notes);
  }, [notes]);

  useEffect(() => {
    // subjects && setSubjects(subjects.filter((value, index, self) => {
    //   return self.indexOf(value) === index;
    // }))
    const uniqueArray = allSubjects.reduce((accumulator, currentValue) => {
      if (!accumulator.includes(currentValue)) {
        accumulator.push(currentValue);
      }
      return accumulator;
    }, []);
      

    setSubjects(uniqueArray)
  }, [allSubjects])
  

  useEffect(() => {
    subject && setAllNotes(notes.filter((note) => note.subject === subject));
  }, [subject]);

  useEffect(() => {
    sem && setAllNotes(notes.filter((note) => note.semester === sem));
    allNotes && setAllSubjects(allNotes.map((note) => note.subject));
  }, [sem, allNotes]);

  useEffect(() => {
    filterYear &&
      setAllNotes(
        notes.filter((note) => note.paper_year === parseInt(filterYear, 10))
      );
  }, [filterYear]);

  //   console.log(allNotes);

  return (
    <div>
      <Navbar />
      <div className="notes">
        <div>
          <div className="select-sem">
            <h3>
              <button className="mx-5 btn btn-danger back-btn">
                <i className="fa fa-angle-left mx-1"></i>
                <button
                  style={{
                    background: "none",
                    outline: "none",
                    border: "none",
                  }}
                  onClick={() => navigate(-1)}
                >
                  BACK{" "}
                </button>
              </button>
            </h3>
            <div className="select-sem-heading">
              <h3>Semester</h3>
            </div>
            <div className="select-sem-option">
              <div
                className={`ss-option ${sem == "odd" ? "ss-option-active" : ""}`}
              >
                <div className="sem-select-text">
                  <button
                    style={{
                      background: "none",
                      border: "none",
                    }}
                    onClick={() => {
                      setSem("odd");
                    }}
                  >
                    ODD
                  </button>
                </div>
              </div>
              <div
                className={`ss-option ${sem == "even" ? "ss-option-active" : ""}`}
              >
                <div className="sem-select-text">
                  <button
                    style={{
                      background: "none",
                      border: "none",
                    }}
                    onClick={() => {
                      setSem("even");
                    }}
                  >
                    EVEN
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="subjects" style={{ marginRight: "2em" }}>
              <div className="subject-heading">
                {/* <h3>Select Subject</h3> */}
              </div>
              <div className="">
                <div className="input-select-box" style={{ margin: 0 }}>
                  <div className="select-branch">
                    <div className="sc-heading">
                      <h4>Select your Subject</h4>
                    </div>

                    <select
                      name=""
                      className="branchSelect custom-select"
                      onChange={(e) => {
                        e.target.value !== "" && setSubject(e.target.value);
                      }}
                      value={branch}
                      id="inputGroupSelect02"
                    >
                      <option value="">Choose...</option>

                      {subjects.map((s) => {
                        return (
                          <>
                            <option value={s}>{s}</option>
                          </>
                        );
                      })}
                    </select>
                  </div>

                  {!isNotes && (<div className="select-branch">
                    <div className="sc-heading">
                      <h4>Choose Session</h4>
                    </div>

                    <select
                      name=""
                      className="branchSelect custom-select"
                      onChange={(e) => {
                        e.target.value !== "" && setFilterYear(e.target.value);
                      }}
                      value={branch}
                      id="inputGroupSelect02"
                    >
                      <option value="">Choose...</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                      <option value="2018">2018</option>
                      <option value="2017">2017</option>
                    </select>
                  </div>)}

                </div>
              </div>
            </div>
          </div>

          <div
            className="container noteContainer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "3rem",
            }}
          >
            {allNotes.length!==0 ? (
              allNotes.map((note) => {
                return (
                  <>
                    <div id="post-its">
                      <div id="post-it-container">
                        <div id="post-it-card" className="shadow">
                          <div className="front face">
                            <div className="strategy">{note.title}</div>
                          </div>
                          <div className="back face center">
                            <a href={note.paperLink}>
                              Click Here to View/Download
                            </a>
                            <p></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })
            ) : (
              <>
                <h3>No Notes/Question Paper to Display</h3>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
