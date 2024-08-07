"use client";
import CustomBtn from "@/app/_components/Button/CustomBtn";
import CustomSelectInput from "@/app/_components/CustomSelectInput/CustomSelectInput";
import styles from "./new-template.module.css";
import { Link } from "@mui/material";
import React from "react";

export default function Page() {
  return (
    <section>
      {/* Back To Complaint Table Button */}
      <div className="flex items-center gap-4 my-[15px]">
        <Link href="/hr/personnel/exit-interviews/">
          <svg
            width="11"
            height="22"
            viewBox="0 0 11 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 20.8993L11 1.09878C10.9996 0.898304 10.9627 0.701801 10.8932 0.530416C10.8237 0.359031 10.7244 0.219253 10.6058 0.126133C10.4873 0.03301 10.354 -0.00993011 10.2203 0.0019317C10.0867 0.0137935 9.95773 0.080009 9.84734 0.19345L0.296979 10.0937C-0.0989937 10.504 -0.0989937 11.4919 0.296979 11.9033L9.84734 21.8036C9.9575 21.9182 10.0865 21.9854 10.2204 21.9979C10.3543 22.0104 10.4879 21.9677 10.6067 21.8745C10.7255 21.7813 10.825 21.6411 10.8943 21.4692C10.9637 21.2973 11.0002 21.1002 11 20.8993Z"
              fill="#2A2B2A"
            />
          </svg>
        </Link>
        <span className="text-[36px] font-bold ">Exit Interviews Template</span>
      </div>

      {/* Template Container */}
      <div className="flex justify-between gap-[3vw]">
        {/* Employment Details */}
        <div className=" flex-grow space-y-6">
          {/* Section Title */}
          <h3 className="font-bold text-[20px]">Employment Details</h3>

          {/* Select Employee */}
          <div>
            <label className="font-bold block mb-[1.5vh]">
              Select Employee
            </label>
            {/* Custom select input for employee selection */}
            <CustomSelectInput options={[""]} label={"John Doe Johnney Doe"} />
          </div>

          {/* Contract Dates */}
          <div className="flex gap-[2vw]">
            {/* Contract Start Date */}
            <div className="flex-grow">
              <label className="font-bold block mb-[1.5vh]">
                Contract Start Date
              </label>
              {/* Custom select input for contract start date */}
              <CustomSelectInput options={[""]} label={"20 March 2020"} />
            </div>

            {/* Contract End Date */}
            <div className="flex-grow">
              <label className="font-bold block mb-[1.5vh]">
                Contract End Date
              </label>
              {/* Custom select input for contract end date */}
              <CustomSelectInput options={[""]} label={"20 March 2023"} />
            </div>
          </div>

          {/* Reason For Quitting */}
          <div>
            <label className="font-bold block mb-[1.5vh]">
              Reason For Quitting
            </label>
            {/* Custom select input for reason for quitting */}
            <CustomSelectInput options={[""]} label={"Select Reason"} />
          </div>

          {/* Two Week Notice */}
          <div className="w-1/2">
            <label className="font-bold block mb-[1.5vh]">
              Two Week Notice
            </label>
            {/* Custom select input for two week notice */}
            <CustomSelectInput options={[""]} label={"Given"} />
          </div>

          {/* Handover Date */}
          <div className="w-1/2">
            <label className="font-bold block mb-[1.5vh]">Handover Date</label>
            {/* Custom select input for handover date */}
            <CustomSelectInput options={[""]} label={"Select Date"} />
          </div>
        </div>

        {/* Question Container */}
        <div className=" flex-grow">
          {/* Section Title */}
          <h3 className="font-bold text-[20px] mb-[1.5vh]">
            Video Editor Template
          </h3>

          {/* Question Container */}
          <div className={styles.questionContainer}>
            {/* Questions Title */}
            <h3 className="font-bold text-[20px] mb-[1.5vh]">Questions:</h3>

            {/* Questions List */}
            <div className="space-y-6">
              {/* Question 1 */}
              <div className="flex flex-col">
                <label
                  className="font-bold mb-[1.5vh] block"
                  htmlFor="tell-me-about-yourself"
                >
                  1. Tell me more about yourself:
                </label>
                {/* Textarea for answering question 1 */}
                <textarea
                  name="tell-me-about-yourself"
                  id="tell-me-about-yourself"
                  cols={30}
                  rows={5}
                ></textarea>
              </div>

              {/* Question 2 */}
              <div className="flex flex-col">
                <label
                  className="font-bold mb-[1.5vh] block"
                  htmlFor="where-do-you-see-yourself"
                >
                  2. Where do you see yourself in 5 years?
                </label>
                {/* Textarea for answering question 2 */}
                <textarea
                  name="where-do-you-see-yourself"
                  id="where-do-you-see-yourself"
                  cols={30}
                  rows={5}
                ></textarea>
              </div>

              {/* Question 3 */}
              <div className="flex flex-col">
                <label
                  className="font-bold mb-[1.5vh] block"
                  htmlFor="exp-in-pr"
                >
                  3. Do you have experience in PR?
                </label>
                {/* Input field for answering question 3 */}
                <input name="exp-in-pr" id="exp-in-pr" type="text"></input>
              </div>

              {/* Question 4 */}
              <div className="flex flex-col">
                <label
                  className="font-bold mb-[1.5vh] block"
                  htmlFor="exp-in-after-effects"
                >
                  4. Do you have experience in Adobe After Effects?
                </label>
                {/* Input field for answering question 4 */}
                <input
                  name="exp-in-after-effects"
                  id="exp-in-after-effects"
                  type="text"
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* save button */}
      <div className="flex justify-end mt-[20px]">
        <CustomBtn word={"Save"} btnColor="black" />
      </div>
    </section>
  );
}
