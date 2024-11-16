import React from 'react'
import { Link } from 'react-router-dom'


const internshipHeadingStyle={
  fontFamily:"georgia",
  fontWeight:"800",
  marginTop:'20px'  // 
}
const Intership = () => {
  return (
    <div className='container'>
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <img 
            style={{width:'100%',height:'500px',borderRadius:'10px', marginTop:"20px"}} 
            src="/assets/homeimages/internship-banner.webp" 
            alt="internship-banner" 
        />
        <h2 style={{fontFamily:'georgia,sans-serif',fontWeight:900, marginTop:'30px'}}>
        Elevate Your Skills: Join Summer Training at ThoughtCoders for the Best Learning Experience!
        </h2>
      </div>
      <p>
        Thoughtcoders provides the best Summer Training for the students pursuing B .Tech, MTech, BE, B.SC, M.sc, 
        BCA, MCA,CS, CSE, IT, Information Technology, or Engineering for a better learning experience. 
        We aim to deliver engineering services formal domains that is not only beneficial for learning purpose 
        but also for practicing in various fields. Candidates will get guaranteed 100% placement support from 
        this valuable training center. There are several benefits associated with this summer training for the 
        students who promises to learn something new. After giving a valuable  educational training foreground 
        100 students and achieving milestone, Thoughtcoders has come with new courses in the Summer Training for 
        B .Tech, CS, CSE, IT, BCA, MCA, B.E, MTech, B.Sc., and M.Sc./Engineering Students. These courses are 
        itself has shown a growth in the field of Training and Development. Since our incorporation from the year 
        2021, we are recognized as a Start-Up by the Department of Promotion of Industry and Internal Trade. 
        Working with IT Services Industries and  Testing Centers, we are also developed as a training organization 
        with remarkable growth. For us, Quality is an important asset and paramount for all the organizations.
        Thoughtcoders maintains a strong emphasis on quality and recognizes the value to provide high-quality 
        technical education for gaining a competitive edge. We are featuring with the best educators and 
        specialist from the best institutes for BE / Computer Science/CSE/IT/Information 
        Technology/ BCA/ MCA/ B.sc/ M.sc/ B .Tech/ MTech/Engineering Students.
      </p>
      <h3 style={internshipHeadingStyle}>Reasons To Enroll With Thoughtcoders For Summer Training</h3>
      <ul>
        <li>
          We are one of the top Summer Training centers for providing high-quality education to the students for 
          advancing their careers. Students can sign up to 500+ courses that Thought Coders are ready to offer 
          and seize a chance to learn in an advance way.
        </li>
        <li>
          During this Summer Training, students may start their learning from a new way which includes 
          real-project works, tasks, responsibilities and assignments. Our trainers are experienced and 
          knowledgeable about the most recent projects and developments in the fields.
        </li>
        <li>
          One of the main benefits that will enable students to develop their abilities and grow in their jobs is 
          this. Nonetheless, there’s no denying that Thoughtcoders provides high-quality education and 100% 
          placement support to the engineering students.
        </li>
        <li>
          Thought Coders offers a 6-week summer training program in that includes both basic and advanced ideas 
          in its curriculum.
        </li>
      </ul>
      <strong>By joining the Summer Training in Ballia, Uttar Pradesh, our students will get the following benefits:</strong>
      <ul className="list-unstyled">
          <li style={{textDecoration:'none'}}>a. We empower students in making their time more useful by applying technical ideas and knowledge of theory to thermal-world situations.</li>
          <li style={{textDecoration:'none'}}>b. The instructors are always available to answer the questions of our students and assist in learning nonmaterial.          </li>
          <li style={{textDecoration:'none'}}>c. Thought Coders focuses in offering Summer Training at Ballia, Uttar Pradesh to the aspirants of the world, in order to provide flexibility to the students in choosing their subjective interest.</li>
          <li style={{textDecoration:'none'}}>d. Your soft skills, such communication and leadership, are developed by our trainers, who also routinely get you ready for interviews</li>
          <li style={{textDecoration:'none'}}>e. With its worldwide recognized certification program,ThoughtCoders offers a highly sought-after credential inthe technical field.</li>
          <li style={{textDecoration:'none'}}>f. ThoughtCoders already has partnerships with recognizedcorporations, therefore, candidates don’t have to worryabout finding employment.</li>
      </ul>

      <p>
        By participating in the ThoughtCoders Summer Internship, you will have a bright future, and we wish you the 
        best Summer Traning ThoughtCoders has No. 1 Training Institute for B .Tech, MTech, BE, B.SC, M.sc, BCA, MCA, CS, CSE, IT, Information Technology, or Engineering students at the given below address.
        IT Building, Bhimpura No 1 Ballia Uttar Pradesh 221716
      </p>
      <h2 style={internshipHeadingStyle}>Our Training Projects and Duration are :</h2>
      <p>Our Training Projects and Duration are :</p>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">DURATION OF THE COURSE</th>
            <th scope="col">COURSE</th>
            <th scope="col">TOPICS COVERED</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>4/6 WEEKS OR 6 WEEKS</td>
            <td>TECHNOLOGIES</td>
            <td>JavaScript, Python, Core Java, React JS, Next JS, C language, Test Automation 
              ( Selenium with Java),<br /> Test Automation ( Selenium with Python), Digital Marketing, Website 
              Designing, Embedded System <br /> andManual Testing.
            </td>
          </tr>
          <tr>
            <td>6 MONTHS</td>
            <td>TECHNOLOGIES</td>
            <td>JavaScript, Python, Core Java, React JS, Next JS, C language, Test Automation 
              ( Selenium with Java), <br /> Test Automation ( Selenium with Python), Digital Marketing,
               Website Designing, Embedded <br />System and Manual  Testing
            </td>
          </tr>
          <tr>
            <td>6 MONTHS OR 1 YEAR DIPLOMA COURSE</td>
            <td>TECHNOLOGIES</td>
            <td>JavaScript, Python, Core Java, React JS, Next JS, C language, Test Automation 
              ( Selenium with Java), <br /> Test Automation ( Selenium with Python), Digital Marketing,
               Website Designing, Embedded <br />System and Manual  Testing
            </td>
          </tr>
          <tr>
            <td>4 WEEKENDS/6 WEEKENDS</td>
            <td>TECHNOLOGIES</td>
            <td>JavaScript, Python, Core Java, React JS, Next JS, C language, Test Automation 
              ( Selenium with Java), <br /> Test Automation ( Selenium with Python), Digital Marketing,
               Website Designing, Embedded <br />System and Manual  Testing
            </td>
          </tr>
          <tr>
            <td>6 WEEKENDS</td>
            <td>TECHNOLOGIES</td>
            <td>JavaScript, Python, Core Java, React JS, Next JS, C language, Test Automation 
              ( Selenium with Java), <br /> Test Automation ( Selenium with Python), Digital Marketing,
               Website Designing, Embedded <br />System and Manual  Testing
            </td>
          </tr>
        </tbody>
      </table>

      <h2 style={internshipHeadingStyle}>We offer the following services to our aspirants:</h2>
      <ul>
        <li>Corporate IT Training.</li>
        <li>Embedded System & CAD Trainings.</li>
        <li>Soft Skills Training.</li>
        <li>Financial Services Training.</li>
        <li>Retail Training.</li>
        <li>Training Infrastructure.</li>
        <li>Introducing Training.</li>
        <li>Training Staffing on Contract (B2B).</li>
        <li>Non-IT Traning.</li>
        <li>Non- Technical Traning</li>
      </ul>

      <h3 style={internshipHeadingStyle}>
        Summary Of Thoughtcoders-Summer Training/Internship Program
      </h3>
      <p>
        ThoughtCoders Summer Training provides the advantage of great learning experience from the real world. 
        When students are seeking their first-job interviews, Summer Trainings are the only things that gives 
        them confidence and opportunity to step into the real world. The significant experience of the aspirants 
        that they gain from the Summer Trainings their first or subsequent job interviews easier and more exciting. 
        Students are exposed to both industrial initiatives and the reorganizational culture of an environment 
        throughout their Summer Training program. Under the direction and supervision of industry professionals and 
        Trainers, you may learn about the practical elements of implementation, such as coding, decoding, programming, 
        debugging, configuration, installation, administration, and designing abilities.
      </p>
      <h3 style={internshipHeadingStyle}>
        Extra Service Under The Summer Training Programme
      </h3>
      <p>
      Thoughtcoders, Top Summer Training Programmed for B . Tech, MTech, BE, B.SC, M.sc, BCA, MCA, CS, CSE, IT, 
      Information Technology, or Engineering students has a strong and consistent track record of providing best 
      results. We have collaborated with various giant enterprises, so that our students can practice upon real-world
      projects and focus on campus recruitment easily. Throughout our Summer Training Programmer, students get a 
      variety of Extra Services like soft spoken skills, personality development, resistant to changes, etc.
      </p>
      <h2 style={internshipHeadingStyle}>Our Unique Aspects of the Summer Training Program</h2>
      <p>
      There are certain aspects of the Thought Coders- Summer Training Programmed for CS/ CSE/ IT/ BCA/MCA/B .Tech
      / MTech/B.Sc./ M.sc/ BE/ Engineering student which are given as follows : 
      </p>
      <ul className='list-unstyled'>
        <li style={{textDecoration:'none'}}>a. Thought Coders Summer Training programmed students have the opportunity to participate in Placement Drives hosted by reputable and elite organizations.</li>
        <li style={{textDecoration:'none'}}>b. The training credentials issued by Thought Coders are acknowledged and accepted worldwide.</li>
        <li style={{textDecoration:'none'}}>c. We work on “Practical live projects” that ensure “effective learning” and support the confidence-building process for both international and Indian students.</li>
        <li style={{textDecoration:'none'}}>d. Our Trainers are all ready to address each learner’s questions and concerns one-on-one.</li>
        <li style={{textDecoration:'none'}}>e. We work better and improve course material that promotes intelligent learning, which leads to course completion success.</li>
        <li style={{textDecoration:'none'}}>f. We also grant additional offers short-term courses to accelerate technological learning in a condensed amount of time.</li>
        <li style={{textDecoration:'none'}}>g. There is flexibility in selecting the batch date. Once chosen, batch dates are modifiable up to seven days before the batch begins.</li>
        <li style={{textDecoration:'none'}}>h. Students who join the Thought Coders Family will receive an alone-year membership card that allows them to retake the same course and access a variety of other perks.</li>
        <li style={{textDecoration:'none'}}>i. We provide an academic learning environment because of the stimulating and thought-provoking conversations with and professionals.</li>
      </ul>

      <h2 style={internshipHeadingStyle}>Additional Benefits Offered Under The Summer Trainings</h2>
      <ul>
        <li>
          Project Development is an important aspect of the training part for the students. 
          The students will be learning various aspects of the technology step by step and Thought 
          Coders(Best Summer Course Institute for CS Student/ CSE Student/IT Student/  Computer Science/ 
          Information Student/ B.TECH/ BE Student/ MTech Student/ BCA Student/ MCA Student/ B.Sc. Student/ M.Sc. 
          Student) makes sure that they practice everything that will come in their way of the profession.
        </li>
        <li>
          In addition to instruction, the students work on project development to learn the practical aspects of 
          their subject domain. As a result, the pupils may put what they’ve learned into practice. 
          This will support the development of a strong foundation.
        </li>
        <li>
          In addition to all of this, they will participate in programs for personality development and interview 
          preparation to get them ready for the job interviews.
        </li>
        <li>
          During an interview, one of the most important factors to evaluate and assess a candidate’s technical 
          skills should be their summer training project.
        </li>
        <li>
          Real-life Project demonstrates services the  application of skills and knowledge to address problems 
          that arise in the workplace. It boosts the candidate’s self-assurance.
        </li>
        <li>
           It will provide a great deal of curiosity, optimism, and energy that will immediately make a flawless 
           impression on the employers throughout the placement.
        </li>
        <li>
          Planning ahead and making long-term preparations are the foundation of quality initiatives. 
          The best summer training facility for computer science, information technology, computer science, 
          B.TECH, BE, M.TECH, BCA, MCA, B.Sc. And M.Sc. students is ThoughtCoders – Summer Training.
        </li>
        <li>
          We make sure their students choose relevant topics, utilize the newest technologies and interview 
          techniques, and always approach the situation creatively.
        </li>
      </ul>
      <p>
        So, are you ready to embark on a knowledgeable journey with the Best Summer Training at Thought Coders. 
        Join us now for an enriching experience that provides fun and learning at a place. Our experts and diverse 
        programmers ensure a memorable journey for you. Don’t miss out on the chance to make this
        Summer extraordinary! Secure your spot today and let the learning adventure begin! Contact us now.
      </p>
      <div className='mt-4 mb-4'>
        <Link to='/contact-us'>
          <button className='btn btn-outline-warning text-black'>Contact Us</button>
        </Link>
      </div>
    </div>
  )
}

export default Intership
