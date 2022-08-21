import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Progress from "./dashboard/Progress";
import { Link } from "react-router-dom";
import axios, { post } from "axios";

import { Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

const VCFProjectform = () => {
  const [project_name, setProject_name] = useState(null);
  const [project_cancer_type, setproject_cancer_type] = useState(null);
  const [project_rerun, setproject_rerun] = useState(null);
  const [vcf_v_file, setvcf_v_file] = useState("");
  const [bam_b_file1, setbam_b_file1] = useState("");
  const [bam_b_file2, setbam_b_file2] = useState("");

  const [vcf_cnv_file, setvcf_cnv_file] = useState("");
  const [vcf_sv_file, setvcf_sv_file] = useState("");
 

  const [uploadPercentage, setUploadPercentage] = useState(0);

  const addPostRequest = async (e) => {
    e.preventDefault();

   

    let formField = new FormData();

    formField.append("project_name", project_name);
    formField.append("project_cancer_type", project_cancer_type);
    formField.append("project_rerun", project_rerun);
    formField.append("vcf_v_file", vcf_v_file);
    formField.append("bam_b_file1", bam_b_file1);

    formField.append("bam_b_file2", bam_b_file2);
    formField.append("vcf_cnv_file", vcf_cnv_file);

    formField.append("vcf_sv_file", vcf_sv_file);
    

    await axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/api/pipeline-vcf-to`,
      headers: {
        "Content-Type": "multipart/form-data",
        "X-CSRFToken": "{{csrf_token}}",
      },

      data: formField,
      onUploadProgress: (progressEvent) => {
        setUploadPercentage(
          parseInt(
            Math.round((progressEvent.loaded * 100) / progressEvent.total)
          )
        );
        setTimeout(() => setUploadPercentage(0), 10000);
      },
    }).then(
      function (res) {
        if (res.status === 200) {
          toast.success("Project successfully deleted");
        } else if (res.status !== 200) {
          alert("Oops! ");
        }
      },
      function (res) {
        toast.error(`Request Failed`);
      }
    );
  };

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">
          <span className="page-title-icon bg-gradient-primary text-white mr-2">
            <i className="mdi mdi-home"></i>
          </span>{" "}
          VCF Form{" "}
        </h3>
        <nav aria-label="breadcrumb">
          <ul className="breadcrumb">
            <li className="breadcrumb-data active" aria-current="page">
              <span></span>Overview{" "}
              <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
            </li>
          </ul>
        </nav>
      </div>

      <div className="row">
        <div className="col-12 grid-margin">
          <div>
            <div className="page-header">
              <h3 className="page-projectName"> Adding BioSample Form </h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a
                      href="!#"
                      onClick={(event) => event.preventDefault()}
                    ></a>
                  </li>
                </ol>
              </nav>
            </div>

            <div className=" col-11 grid-margin stretch-card-1 ">
              <div className="card">
                <div className="card-body">
                  <Form.Group>
                    <label htmlFor="projectname">project_name</label>

                    <Form.Control
                      value={project_name}
                      name="project_name"
                      onChange={(e) => setProject_name(e.target.value)}
                      type="text"
                      id="projectname"
                      placeholder="project_name"
                      size="lg"
                      required
                    />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="projectcancertype">
                      project_cancer_type
                    </label>
                    <Form.Control
                      type="text"
                      id="projectcancertype"
                      placeholder="BioSample Type"
                      size="lg"
                      defaultValue="Solid Tumor, Metastatic Cancer"
                      value={project_cancer_type}
                      name="project_cancer_type"
                      onChange={(e) => setproject_cancer_type(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group>
                    <label id="project_rerun">project_rerun</label>
                    <input
                      type="text"
                      className="form-control"
                      id="project_rerun"
                      placeholder="BioSample Name"
                      value={project_rerun}
                      name="project_rerun"
                      onChange={(e) => setproject_rerun(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group>
                    <label id="vcf file1">vcf_v_file</label>
                    <Form.Control
                      type="file"
                      placeholder="vcf Path"
                      onChange={(e) => setvcf_v_file(e.target.files[0])}
                      required
                    />
                  </Form.Group>
                  <Progress percentage={uploadPercentage} />
                  <Form.Group>
                    <label id="bam file1">bam_b_file1</label>
                    <Form.Control
                      type="file"
                      placeholder="Bam Path"
                      onChange={(e) => setbam_b_file1(e.target.files[0])}
                      required
                    />
                  </Form.Group>
                  <Progress percentage={uploadPercentage} />

                  <Form.Group>
                    <label id="bam file2">bam_b_file2</label>
                    <Form.Control
                      type="file"
                      placeholder="Bam Bai Path"
                      onChange={(e) => setbam_b_file2(e.target.files[0])}
                      required
                    />
                  </Form.Group>
                  <Progress percentage={uploadPercentage} />
                 
                  
                  <Form.Group>
                    <label id="vcf file2">vcf_cnv_file</label>
                    <Form.Control
                      type="file"
                      placeholder="vcf Path"
                      onChange={(e) => setvcf_cnv_file(e.target.files[0])}
                      required
                    />
                  </Form.Group>
                  <Progress percentage={uploadPercentage} />

                  <Form.Group>
                    <label id="vcf file3">vcf_sv_file</label>
                    <Form.Control
                      type="file"
                      placeholder="vcf Path"
                      onChange={(e) => setvcf_sv_file(e.target.files[0])}
                      required
                    />
                  </Form.Group>
                  <Progress percentage={uploadPercentage} />
               

                  <div className="col text-center">
                    <button
                      type="submit"
                      onClick={addPostRequest}
                      className="btn  mr-2 btn-sm"
                      style={{ backgroundColor: "#fec107" }}
                    >
                      Submit
                    </button>
                  </div>

                  <div className="border border-light p-3 mb-4">
                    <div className="text-center">
                      <span>
                        <Link to="/basic-ui/Basespace">
                          <button className="btn btn-light btn-sm">
                            {" "}
                            Cancel
                          </button>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VCFProjectform;
