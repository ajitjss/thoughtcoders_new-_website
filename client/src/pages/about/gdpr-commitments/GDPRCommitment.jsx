import React from 'react'



const gdprHeadingStyle={
  fontFamily:"georgia",
  fontWeight:"800",
  marginTop:'20px'  // 
}
const GDPRCommitment = () => {
  return (
    <div className='container'>
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <img 
            style={{width:'100%',height:'500px',borderRadius:'10px', marginTop:"20px"}} 
            src="/assets/homeimages/GDPR_featureimage.webp" 
            alt="internship-banner" 
        />
        <h2 style={{fontFamily:'georgia,sans-serif',fontWeight:900, marginTop:'30px'}}>
        GDPR Commitment
        </h2>
        <strong>
        "At ThoughtCoders, we are committed to protect our client’s data and work as per the GDPR guidelines. 
        General Data Protection Regulation (GDPR) is comprehensive EU data privacy law that came in 2018 to 
        protect the personal data of EU citizens across the globe."
        </strong>
      </div>
      <h2 style={gdprHeadingStyle}>Committed to Protect Your Data Privacy:</h2>
      <p>
        ThoughtCoders assure to our clientsto protect personal data, and work as per GDPR guidelines. 
        Article 5 of the GDPR contains six principles by which all personal data must be processed.
      </p>
      <div className="row">
        <div className="col-md-10">
          <ul>
            <li>
              <strong>Lawfulness, fairness, and transparency:</strong> We obey the law; only process personal data in a way that 
              people would reasonably expect; always be open about your data protection practices.
            </li>
            <li>
              <strong>Purpose limitation:</strong> We process only process personal data for the specific reason you collected it 
              and nothing else.
            </li>
            <li>
              <strong>Data minimization:</strong> We gather only required personal data and we don’t process any more data than 
              we need.
            </li>
            <li>
              <strong>Accuracy:</strong> We ensure that any personal data hold is adequate and accurate.
            </li>
            <li><strong>Storage limitation:</strong> We never store personal data for longer than you need to.</li>
            <li>
              <strong>Integrity and confidentiality:</strong> always process personal data securely and with right encryption 
              and masking.
            </li>
          </ul>
        </div>
        <div className="col-md-2">
          <img src="https://thoughtcoders.com/wp-content/uploads/2021/12/image-10-150x150.png" alt="gdpr1" />
        </div>
      </div>

      <h2 style={gdprHeadingStyle}>Data Transfer</h2>
      <p>
        In some exceptional conditions, we take the consent of the client and transfer data between the parties 
        following the GDPR guideline. Also, we ensure client data is encrypted and transfer through secure data 
        channels.
      </p>
      <h2 style={gdprHeadingStyle}>Personal Data Privacy Right and Consents</h2>

      <div className="row">
        <div className="col-md-10">
          <p>
            As we know processing personal data is generally prohibited, unless it is expressly allowed by law,
            or the data subject has consented to the processing. While being one of the more well-known legal 
            bases for processing personal data, consent is only one of six bases mentioned in the General 
            DataData Security GDPR Protection Regulation (GDPR). The others are: contract, legal obligations, 
            vital interests of the data subject, public interest and legitimate interest as stated in Article 6(1) 
            GDPR. ThoughtCoders take client approval before client data processing.
          </p>
        </div>
        <div className="col-md-2">
          <img src="https://thoughtcoders.com/wp-content/uploads/2021/12/image-11-150x150.png" alt="" />
        </div>
      </div>

      <h2 style={gdprHeadingStyle}>Data Storage and Portability</h2>
      <p>
        Right to data portability gives data subjects to right to receive back the personal data they provided 
        to a controller in a structured, commonly used and machine-readable format. The right to data portability 
        entitles the data subject to:
      </p>
      <div className="row">
        <div className="col-md-10">
          <ul>
            <li>
              The right to data portability allows data subjects to obtain and reuse personal data about them for their own purposes across different services
            </li>
            <li>
              It allows data subjects to move, copy or transfer personal data easily from one IT environment to another 
              in a safe and secure way without affecting its usability.
            </li>
            <li>
              This enables data subjects to take advantage of different  applications and services that can use 
              their data to find them a better deal or help them understand their spending habits.
            </li>
            <li>
              The right only applies to information a data subject provided to a controller.
            </li>
          </ul>
          <p>
              ThoughtCoders also store our client data in internal servers and in secure storage. 
              Our data security team encrypts data and divides data into modules to store on different secure 
              environment to minimize any possible data breach.
            </p>
        </div>
        <div className="col-md-2">
          <img src="https://thoughtcoders.com/wp-content/uploads/2021/12/image-10-150x150.png" alt="gdpr1" />
        </div>
      </div>

      <h2 style={gdprHeadingStyle}>Our Promises</h2>
      <p>
        ThoughtCoders have dedicated data security team which continuously reviews Data Security process, 
        data storage systems implementing strong firewall and encryption mechanism to protect our client data. 
        We also have periodic training programs for our employee to train about Data security and external 
        threats (hacking, Malware and spamming).
      </p>
      <strong>We promise with our clients to:</strong>
      <ul>
        <li>Follow international rules of privacy laws such as GDPR guidelines and EU guidelines.</li>
        <li>Implement encryption and best practices to protect our client data.</li>
        <li>Reliable Data Storage and split data into partitions and store on unconnected memory servers.</li>
        <li>Provide timely training on Data Security to our employees.</li>
        <li>Use right and certified so no data breach happens.</li>
      </ul>

      <p>
        ThoughtCoders is the right partner for you if you are worrying for data security. Our data security 
        framework is applicable on all our projects, supports, tools and technologies. Our data security team 
        periodically reviewthe process and data security practices. To know more about our GDPR commitment 
        Contact us on <strong>+919555902032</strong> or write us at  <strong>info@thoughtcoders.com</strong>
      </p>
    </div>
  )
}

export default GDPRCommitment
