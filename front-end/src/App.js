import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Nav/NavLayout";
import Home from "./Home";
import Search from "./Search/Search";
import Admin from "./Admin/Admin";

import MDetails from "./MDetails/MDetails";
import RequestForm from "./RequestForm/RequestForm";
import { useState } from "react";
import AddReview from "./AddReview/AddReview";

function App() {
    const [showRequestForm, setShowRequestForm] = useState(false);

    const toggleRequestForm = () => {
        setShowRequestForm((prev) => !prev);
    };

    return (
        <BrowserRouter>
            <div>
              {/* Button to toggle the Request Form */}
              <button
                  className="request-form-toggle"
                  onClick={toggleRequestForm}
              >
                  {showRequestForm ? "Request Form" : "Request Form"}
              </button>

              {/* Conditionally render the Request Form */}
              {showRequestForm && (
                  <div className="request-form-overlay">
                      <RequestForm onClose={() => setShowRequestForm(false)} />
                  </div>
              )}
          </div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="search" element={<Search />} />
                    <Route path="admin" element={<Admin/>} />

                    <Route path="details/:id" element={<MDetails />} />
                    <Route path="addReview/:id" element={<AddReview />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
