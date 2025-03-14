"use client"
import { useState } from "react";
import axios from "axios";
import Modal from "@/components/ui/Modal";

const CreateInterview = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [questions, setQuestions] = useState([""]);
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(true);
  }

  // close modal
  const closeModal = () => {
    setModal(false);
  }

  const handleQuestionChange = (index, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = value;
    setQuestions(updatedQuestions);
  };

  const addQuestion = () => {
    setQuestions([...questions, ""]);
  };

  const removeQuestion = (index) => {
    const removedQuestions = questions.filter((question)=> question !== questions[index]);
    setQuestions(removedQuestions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const interviewData = { title, description, questions };

    try {
      await axios.post("http://localhost:5000/interviews", interviewData);
      setSuccessMessage("Interview created successfully!");
      setTitle("");
      setDescription("");
      setQuestions([""]);
      showModal(true);
    } catch (error) {
      console.error("Error creating interview:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white md:text-base text-xs shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Create Interview</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Interview Title</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block font-semibold">Description</label>
          <textarea
            className="w-full border p-2 rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block font-semibold">Questions</label>
          {questions.map((question, index) => (
            <div key={index} className="flex space-x-2 mb-2">
              <input
                type="text"
                className="w-full border p-2 rounded"
                value={question}
                onChange={(e) => handleQuestionChange(index, e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => removeQuestion(index)}
                className="bg-red-500 text-white px-3 rounded"
              >
                X
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addQuestion}
            className="mt-2 text-blue-600"
          >
            + Add Question
          </button>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Create Interview
        </button>
      </form>
      {modal && <Modal setModal={closeModal}  />}
    </div>
  );
};

export default CreateInterview;
