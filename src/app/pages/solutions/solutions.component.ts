import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './solutions.component.html',
})
export class SolutionsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  activeService: any;
  services: any[] = [
    {
      id: 'anti-money-laundering',
      title: 'Anti-Money Laundering',
      description: 'A Best-in-Class solution to identify and report suspicious activities related to money laundering and terrorist financing, ensuring compliance with current regulations. It combines powerful analytics such as rule-based data mining, profiling, behaviour recognition, and link analysis to reduce alerts to those with the highest relevance.',
      tag: 'Compliance System',
      coverImage: '/assets/img/png/solutions/anti-money-laundering.png',
      contactPerson: {
        name: 'Ogechi Oviakwu',
        role: 'Head of Sales',
        email: 'ogechi.oviakwu@structuredresource.com',
        linkedin: 'https://www.linkedin.com/in/',
        photo: '/assets/img/png/person-2.png'
      },
      features: {
        heading: 'Features',
        description: 'We identify and report suspicious activities related to money laundering and terrorist financing, ensuring compliance with current regulations.',
        list: [
          {
            title: 'Risk Assessment',
            description: 'Benefit from our institution-specific risk/threat analysis system. We manage your security risks,  taking into account the business environment, products and  processes.'
          },
          {
            title: 'Alert & Case Manager',
            description: 'Our compliance officers handle alerts from the “source systems”, investigating details for decision making and file suspicious Activity Reports (SARs) to the local authorities.'
          },
          {
            title: 'Tax Regulations Compliance',
            description: 'Fast implementation of FATCA and OECD CRS tax reporting requirements at banks & insurances. We help you comply with IRS OECD CRS regulations.'
          },
          {
            title: 'Risk and Compliance Cockpit',
            description: 'Enable real-time screening of your swift, SEPA and other payments against multiple watchlists (OFAC, BOE, UN. World Check etc) ensuring that organizations on whom sanctions have been imposed can no longer access financial services or resources.'
          }
        ]
      },
      benefits: {
        heading: 'Benefits',
        list: [
          {
            title: 'Business Partner Screening'
          },
          {
            title: 'Enabled secure data transfer to IRS & national tax authorities'
          },
          {
            title: 'Sanction Filtering'
          }
        ]
      },
      testimonial: {
        quote: 'We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more...',
        logo: '/assets/img/png/partners/color-full/chevron.png',
        name: 'Ciroma Chukwuma',
        role: 'Executive Advisor'
      }
    },
    {
      id: 'anti-fraud',
      title: 'Anti-Fraud',
      description: 'In this age of online banking, fraudsters have upped their cyber theft game. They go after your financial information system (client credit card/bank acc info), steal intellectual property and compromise your reputation with clients. Secure your customer details with our Cyber security measures, SES is tested and trusted. We keep your transactions safe.',
      tag: 'Compliance System',
      coverImage: '/assets/img/png/solutions/anti-fraud.png',
      contactPerson: {
        name: 'Beauty Ojukwu',
        role: 'Head of Business Applications',
        email: 'beauty.ojukwu@structuredresource.com',
        linkedin: 'https://www.linkedin.com/in/',
        photo: '/assets/img/png/person-1.png'
      },
      features: {
        heading: 'Features',
        description: 'We identify and report suspicious activities related to money laundering and terrorist financing, ensuring compliance with current regulations.',
        list: [
          {
            title: 'Risk Assessment',
            description: 'Benefit from our institution-specific risk/threat analysis system. We manage your security risks,  taking into account the business environment, products and  processes.'
          },
          {
            title: 'Alert & Case Manager',
            description: 'Our compliance officers handle alerts from the “source systems”, investigating details for decision making and file suspicious Activity Reports (SARs) to the local authorities.'
          },
          {
            title: 'Tax Regulations Compliance',
            description: 'Fast implementation of FATCA and OECD CRS tax reporting requirements at banks & insurances. We help you comply with IRS OECD CRS regulations.'
          },
          {
            title: 'Risk and Compliance Cockpit',
            description: 'Enable real-time screening of your swift, SEPA and other payments against multiple watchlists (OFAC, BOE, UN. World Check etc) ensuring that organizations on whom sanctions have been imposed can no longer access financial services or resources.'
          }
        ]
      },
      benefits: {
        heading: 'Benefits',
        list: [
          {
            title: 'Business Partner Screening'
          },
          {
            title: 'Enabled secure data transfer to IRS & national tax authorities'
          },
          {
            title: 'Sanction Filtering'
          }
        ]
      },
      testimonial: {
        quote: 'We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more...',
        logo: '/assets/img/png/partners/color-full/chevron.png',
        name: 'Ciroma Chukwuma',
        role: 'Executive Advisor'
      }
    },
    {
      id: 'onboarding-client-life-cycle-management',
      title: 'Onboarding & Client Life Cycle Management',
      description: 'SES Covers all your business requirements end-to-end. From intuitive capturing, compliance, risk management, suitability, forms & contracts to real-time integration. It also covers every type of relation, all products & services in a multi-jurisdiction and multi-channel environment.',
      tag: 'Compliance System',
      coverImage: '/assets/img/png/solutions/onboarding-client-life-cycle-management.png',
      contactPerson: {
        name: 'Beauty Ojukwu',
        role: 'Head of Business Applications',
        email: 'beauty.ojukwu@structuredresource.com',
        linkedin: 'https://www.linkedin.com/in/',
        photo: '/assets/img/png/person-1.png'
      },
      features: {
        heading: 'Features',
        description: 'We identify and report suspicious activities related to money laundering and terrorist financing, ensuring compliance with current regulations.',
        list: [
          {
            title: 'Unmatched User Experience',
            description: 'Using the latest technology, we convert your prospects into loyal clients: from identification, via video chats, to the digital signature of all documents.'
          },
          {
            title: 'Fewer Errors',
            description: 'We provide one interface for single, guided data input ,reducing the need for entering the same data multiple times. It manages dynamic questionnaires for complete data capturing.'
          },
          {
            title: 'Security and Compliance',
            description: 'It is the tool for every Bank to efficiently manage the complexity of compliance requirements coupled with the high number of documents, data and signatures to be gathered, managed and processed.'
          },
          {
            title: 'Smart KYC and EDD',
            description: 'We provide vital information to financial service providers, from KYC, to EDD. Our automated platforms help in verifying the legitimacy of a person/entity, its transactions and sources of funds.'
          }
        ]
      },
      benefits: {
        heading: 'Benefits',
        list: [
          {
            title: 'Business Partner Screening'
          },
          {
            title: 'Enabled secure data transfer to IRS & national tax authorities'
          },
          {
            title: 'Sanction Filtering'
          }
        ]
      },
      testimonial: {
        quote: 'We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more...',
        logo: '/assets/img/png/partners/color-full/chevron.png',
        name: 'Ciroma Chukwuma',
        role: 'Executive Advisor'
      }
    },
    {
      id: 'enterprise-information-managemnt-ecm',
      title: 'Enterprise Information Management / ECM',
      description: 'Through the ECM function, we help your business obtain, organize, store and deliver critical information to employees, business stakeholders and customers.This is the central infrastructure for all content – in the context of any corporate activities and automated process. ',
      tag: 'Compliance System',
      coverImage: '/assets/img/png/solutions/onboarding-client-life-cycle-management.png',
      contactPerson: {
        name: 'Beauty Ojukwu',
        role: 'Head of Business Applications',
        email: 'beauty.ojukwu@structuredresource.com',
        linkedin: 'https://www.linkedin.com/in/',
        photo: '/assets/img/png/person-1.png'
      },
      features: {
        heading: 'Features',
        description: 'We identify and report suspicious activities related to money laundering and terrorist financing, ensuring compliance with current regulations.',
        list: [
          {
            title: 'Unmatched User Experience',
            description: 'Using the latest technology, we convert your prospects into loyal clients: from identification, via video chats, to the digital signature of all documents.'
          },
          {
            title: 'Fewer Errors',
            description: 'We provide one interface for single, guided data input ,reducing the need for entering the same data multiple times. It manages dynamic questionnaires for complete data capturing.'
          },
          {
            title: 'Security and Compliance',
            description: 'It is the tool for every Bank to efficiently manage the complexity of compliance requirements coupled with the high number of documents, data and signatures to be gathered, managed and processed.'
          },
          {
            title: 'Smart KYC and EDD',
            description: 'We provide vital information to financial service providers, from KYC, to EDD. Our automated platforms help in verifying the legitimacy of a person/entity, its transactions and sources of funds.'
          }
        ]
      },
      benefits: {
        heading: 'Benefits',
        list: [
          {
            title: 'Enhanced data security'
          },
          {
            title: 'Case Management and Workflow'
          },
          {
            title: 'Archive and Records Management'
          },
          {
            title: 'Workflow Administration'
          },
          {
            title: 'Content Access from Anywhere'
          },
          {
            title: 'Permission Control and IRM'
          },
        ]
      },
      testimonial: {
        quote: 'We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more...',
        logo: '/assets/img/png/partners/color-full/chevron.png',
        name: 'Ciroma Chukwuma',
        role: 'Executive Advisor'
      }
    },
    {
      id: 'adaptive-case-manager',
      title: 'Adaptive Case Manager',
      description: 'Our Adaptive Case Manager is a Digital Business Platform that automates work, enabling the efficient completion of an entire case, empowering work requiring flexibility and human judgment automate business processes.',
      tag: 'Compliance System',
      coverImage: '/assets/img/png/solutions/adaptive-case-manager.png',
      contactPerson: {
        name: 'Beauty Ojukwu',
        role: 'Head of Business Applications',
        email: 'beauty.ojukwu@structuredresource.com',
        linkedin: 'https://www.linkedin.com/in/',
        photo: '/assets/img/png/person-1.png'
      },
      features: {
        heading: 'Features',
        description: 'We identify and report suspicious activities related to money laundering and terrorist financing, ensuring compliance with current regulations.',
        list: [
          {
            title: 'Unmatched User Experience',
            description: 'Using the latest technology, we convert your prospects into loyal clients: from identification, via video chats, to the digital signature of all documents.'
          },
          {
            title: 'Fewer Errors',
            description: 'We provide one interface for single, guided data input ,reducing the need for entering the same data multiple times. It manages dynamic questionnaires for complete data capturing.'
          },
          {
            title: 'Security and Compliance',
            description: 'It is the tool for every Bank to efficiently manage the complexity of compliance requirements coupled with the high number of documents, data and signatures to be gathered, managed and processed.'
          },
          {
            title: 'Smart KYC and EDD',
            description: 'We provide vital information to financial service providers, from KYC, to EDD. Our automated platforms help in verifying the legitimacy of a person/entity, its transactions and sources of funds.'
          }
        ]
      },
      benefits: {
        heading: 'Benefits',
        list: [
          {
            title: 'Business Partner Screening'
          },
          {
            title: 'Enabled secure data transfer to IRS & national tax authorities'
          },
          {
            title: 'Sanction Filtering'
          }
        ]
      },
      testimonial: {
        quote: 'We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more...',
        logo: '/assets/img/png/partners/color-full/chevron.png',
        name: 'Ciroma Chukwuma',
        role: 'Executive Advisor'
      }
    },
    {
      id: 'kiosk-self-service',
      title: 'Kiosk Self Service',
      description: 'We offer a range of full integration solutions for iKiosks. We provide electronic support machine that enables users to access information and perform tasks with little or no need for direct human interaction for banking services.',
      tag: 'Self Service Solution',
      coverImage: '/assets/img/png/solutions/kiosk-self-service.png',
      contactPerson: {
        name: 'Ogechi Oviakwu',
        role: 'Head of Sales',
        email: 'ogechi.oviakwu@structuredresource.com',
        linkedin: 'https://www.linkedin.com/in/',
        photo: '/assets/img/png/person-2.png'
      },
      features: {
        heading: 'Features',
        description: 'We identify and report suspicious activities related to money laundering and terrorist financing, ensuring compliance with current regulations.',
        list: [
          {
            title: 'Risk Assessment',
            description: 'Benefit from our institution-specific risk/threat analysis system. We manage your security risks,  taking into account the business environment, products and  processes.'
          },
          {
            title: 'Alert & Case Manager',
            description: 'Our compliance officers handle alerts from the “source systems”, investigating details for decision making and file suspicious Activity Reports (SARs) to the local authorities.'
          },
          {
            title: 'Tax Regulations Compliance',
            description: 'Fast implementation of FATCA and OECD CRS tax reporting requirements at banks & insurances. We help you comply with IRS OECD CRS regulations.'
          },
          {
            title: 'Risk and Compliance Cockpit',
            description: 'Enable real-time screening of your swift, SEPA and other payments against multiple watchlists (OFAC, BOE, UN. World Check etc) ensuring that organizations on whom sanctions have been imposed can no longer access financial services or resources.'
          }
        ]
      },
      benefits: {
        heading: 'Benefits',
        list: [
          {
            title: 'Business Partner Screening'
          },
          {
            title: 'Enabled secure data transfer to IRS & national tax authorities'
          },
          {
            title: 'Sanction Filtering'
          }
        ]
      },
      testimonial: {
        quote: 'We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more...',
        logo: '/assets/img/png/partners/color-full/chevron.png',
        name: 'Ciroma Chukwuma',
        role: 'Executive Advisor'
      }
    },
    {
      id: 'smart-pos-service',
      title: 'Smart POS Service',
      description: 'We offer SMART POS devices equipped with advanced capabilities.',
      tag: 'Self Service Solution',
      coverImage: '/assets/img/png/solutions/smart-pos-service.png',
      contactPerson: {
        name: 'Ogechi Oviakwu',
        role: 'Head of Sales',
        email: 'ogechi.oviakwu@structuredresource.com',
        linkedin: 'https://www.linkedin.com/in/',
        photo: '/assets/img/png/person-2.png'
      },
      features: {
        heading: 'Features',
        description: 'We identify and report suspicious activities related to money laundering and terrorist financing, ensuring compliance with current regulations.',
        list: [
          {
            title: 'Risk Assessment',
            description: 'Benefit from our institution-specific risk/threat analysis system. We manage your security risks,  taking into account the business environment, products and  processes.'
          },
          {
            title: 'Alert & Case Manager',
            description: 'Our compliance officers handle alerts from the “source systems”, investigating details for decision making and file suspicious Activity Reports (SARs) to the local authorities.'
          },
          {
            title: 'Tax Regulations Compliance',
            description: 'Fast implementation of FATCA and OECD CRS tax reporting requirements at banks & insurances. We help you comply with IRS OECD CRS regulations.'
          },
          {
            title: 'Risk and Compliance Cockpit',
            description: 'Enable real-time screening of your swift, SEPA and other payments against multiple watchlists (OFAC, BOE, UN. World Check etc) ensuring that organizations on whom sanctions have been imposed can no longer access financial services or resources.'
          }
        ]
      },
      benefits: {
        heading: 'Benefits',
        list: [
          {
            title: 'Business Partner Screening'
          },
          {
            title: 'Enabled secure data transfer to IRS & national tax authorities'
          },
          {
            title: 'Sanction Filtering'
          }
        ]
      },
      testimonial: {
        quote: 'We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more...',
        logo: '/assets/img/png/partners/color-full/chevron.png',
        name: 'Ciroma Chukwuma',
        role: 'Executive Advisor'
      }
    },
    {
      id: 'atm-service',
      title: 'ATM Service',
      description: 'This self service option focuses on the Design and deployment of ATMs and iKiosks. We repair and refurbish worn-out parts, upgrade obsolete parts and provide after sale support services to enhance the life of ATMs.',
      tag: 'Self Service Solution',
      coverImage: '/assets/img/png/solutions/atm-service.png',
      contactPerson: {
        name: 'Ogechi Oviakwu',
        role: 'Head of Sales',
        email: 'ogechi.oviakwu@structuredresource.com',
        linkedin: 'https://www.linkedin.com/in/',
        photo: '/assets/img/png/person-2.png'
      },
      features: {
        heading: 'Features',
        description: 'We identify and report suspicious activities related to money laundering and terrorist financing, ensuring compliance with current regulations.',
        list: [
          {
            title: 'Risk Assessment',
            description: 'Benefit from our institution-specific risk/threat analysis system. We manage your security risks,  taking into account the business environment, products and  processes.'
          },
          {
            title: 'Alert & Case Manager',
            description: 'Our compliance officers handle alerts from the “source systems”, investigating details for decision making and file suspicious Activity Reports (SARs) to the local authorities.'
          },
          {
            title: 'Tax Regulations Compliance',
            description: 'Fast implementation of FATCA and OECD CRS tax reporting requirements at banks & insurances. We help you comply with IRS OECD CRS regulations.'
          },
          {
            title: 'Risk and Compliance Cockpit',
            description: 'Enable real-time screening of your swift, SEPA and other payments against multiple watchlists (OFAC, BOE, UN. World Check etc) ensuring that organizations on whom sanctions have been imposed can no longer access financial services or resources.'
          }
        ]
      },
      benefits: {
        heading: 'Benefits',
        list: [
          {
            title: 'Business Partner Screening'
          },
          {
            title: 'Enabled secure data transfer to IRS & national tax authorities'
          },
          {
            title: 'Sanction Filtering'
          }
        ]
      },
      testimonial: {
        quote: 'We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more...',
        logo: '/assets/img/png/partners/color-full/chevron.png',
        name: 'Ciroma Chukwuma',
        role: 'Executive Advisor'
      }
    },
    {
      id: 'web-banking-applications',
      title: 'Web Banking Applications',
      description: 'SES offers the industry’s leading web application security solution, providing enterprise-class protection against the most sophisticated security threats. Whether your websites and applications are hosted in the public cloud or on-premises,our solution ensures your critical assets are always protected against any type of application layer hacking attempt.',
      tag: 'Application Security',
      coverImage: '/assets/img/png/solutions/web-banking-applications.png',
      contactPerson: {
        name: 'Beauty Ojukwu',
        role: 'Head of Business Applications',
        email: 'beauty.ojukwu@structuredresource.com',
        linkedin: 'https://www.linkedin.com/in/',
        photo: '/assets/img/png/person-1.png'
      },
      features: {
        heading: 'Features',
        description: 'We identify and report suspicious activities related to money laundering and terrorist financing, ensuring compliance with current regulations.',
        list: [
          {
            title: 'Unmatched User Experience',
            description: 'Using the latest technology, we convert your prospects into loyal clients: from identification, via video chats, to the digital signature of all documents.'
          },
          {
            title: 'Fewer Errors',
            description: 'We provide one interface for single, guided data input ,reducing the need for entering the same data multiple times. It manages dynamic questionnaires for complete data capturing.'
          },
          {
            title: 'Security and Compliance',
            description: 'It is the tool for every Bank to efficiently manage the complexity of compliance requirements coupled with the high number of documents, data and signatures to be gathered, managed and processed.'
          },
          {
            title: 'Smart KYC and EDD',
            description: 'We provide vital information to financial service providers, from KYC, to EDD. Our automated platforms help in verifying the legitimacy of a person/entity, its transactions and sources of funds.'
          }
        ]
      },
      benefits: {
        heading: 'Benefits',
        list: [
          {
            title: 'Business Partner Screening'
          },
          {
            title: 'Enabled secure data transfer to IRS & national tax authorities'
          },
          {
            title: 'Sanction Filtering'
          }
        ]
      },
      testimonial: {
        quote: 'We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more...',
        logo: '/assets/img/png/partners/color-full/chevron.png',
        name: 'Ciroma Chukwuma',
        role: 'Executive Advisor'
      }
    },
    {
      id: 'mobile-banking-applications',
      title: 'Mobile Banking Applications',
      description: 'Our solution delivers comprehensive security for mobile applications. The best way to secure an application is to focus on its critical parts, an approach shared with the devices industry and with our successful customers. By isolating the sensitive code and data in a secure location, we can effectively protect both against attacks.',
      tag: 'Application Security',
      coverImage: '/assets/img/png/solutions/mobile-banking-applications.png',
      contactPerson: {
        name: 'Beauty Ojukwu',
        role: 'Head of Business Applications',
        email: 'beauty.ojukwu@structuredresource.com',
        linkedin: 'https://www.linkedin.com/in/',
        photo: '/assets/img/png/person-1.png'
      },
      features: {
        heading: 'Features',
        description: 'We identify and report suspicious activities related to money laundering and terrorist financing, ensuring compliance with current regulations.',
        list: [
          {
            title: 'Unmatched User Experience',
            description: 'Using the latest technology, we convert your prospects into loyal clients: from identification, via video chats, to the digital signature of all documents.'
          },
          {
            title: 'Fewer Errors',
            description: 'We provide one interface for single, guided data input ,reducing the need for entering the same data multiple times. It manages dynamic questionnaires for complete data capturing.'
          },
          {
            title: 'Security and Compliance',
            description: 'It is the tool for every Bank to efficiently manage the complexity of compliance requirements coupled with the high number of documents, data and signatures to be gathered, managed and processed.'
          },
          {
            title: 'Smart KYC and EDD',
            description: 'We provide vital information to financial service providers, from KYC, to EDD. Our automated platforms help in verifying the legitimacy of a person/entity, its transactions and sources of funds.'
          }
        ]
      },
      benefits: {
        heading: 'Benefits',
        list: [
          {
            title: 'Business Partner Screening'
          },
          {
            title: 'Enabled secure data transfer to IRS & national tax authorities'
          },
          {
            title: 'Sanction Filtering'
          }
        ]
      },
      testimonial: {
        quote: 'We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more...',
        logo: '/assets/img/png/partners/color-full/chevron.png',
        name: 'Ciroma Chukwuma',
        role: 'Executive Advisor'
      }
    },
    {
      id: 'power-solutions',
      title: 'Power Solutions',
      description: 'SES provides client support throughout the power solution cycle, offering services including uninterruptible power supply, stabilizer and automatic voltage regulators, power backup solution (firely ™), batteries for inverters, stabilizers and other equipment, alternative energy systems, energy audit and power cleanup services.',
      tag: 'Power Solutions',
      coverImage: '/assets/img/png/solutions/power-solutions.png',
      contactPerson: {
        name: 'Ogechi Oviakwu',
        role: 'Head of Sales',
        email: 'ogechi.oviakwu@structuredresource.com',
        linkedin: 'https://www.linkedin.com/in/',
        photo: '/assets/img/png/person-2.png'
      },
      features: {
        heading: 'Features',
        description: 'We identify and report suspicious activities related to money laundering and terrorist financing, ensuring compliance with current regulations.',
        list: [
          {
            title: 'Risk Assessment',
            description: 'Benefit from our institution-specific risk/threat analysis system. We manage your security risks,  taking into account the business environment, products and  processes.'
          },
          {
            title: 'Alert & Case Manager',
            description: 'Our compliance officers handle alerts from the “source systems”, investigating details for decision making and file suspicious Activity Reports (SARs) to the local authorities.'
          },
          {
            title: 'Tax Regulations Compliance',
            description: 'Fast implementation of FATCA and OECD CRS tax reporting requirements at banks & insurances. We help you comply with IRS OECD CRS regulations.'
          },
          {
            title: 'Risk and Compliance Cockpit',
            description: 'Enable real-time screening of your swift, SEPA and other payments against multiple watchlists (OFAC, BOE, UN. World Check etc) ensuring that organizations on whom sanctions have been imposed can no longer access financial services or resources.'
          }
        ]
      },
      benefits: {
        heading: 'Benefits',
        list: [
          {
            title: 'Business Partner Screening'
          },
          {
            title: 'Enabled secure data transfer to IRS & national tax authorities'
          },
          {
            title: 'Sanction Filtering'
          }
        ]
      },
      testimonial: {
        quote: 'We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more...',
        logo: '/assets/img/png/partners/color-full/chevron.png',
        name: 'Ciroma Chukwuma',
        role: 'Executive Advisor'
      }
    },
    {
      id: 'payment-solution',
      title: 'Payment Solutions',
      description: 'Digitize your payment infrastructure. Experience payment solutions that help you meet and surpass consumer expectations. ',
      tag: 'Payment Solutions',
      coverImage: '/assets/img/png/solutions/payment-solution.png',
      contactPerson: {
        name: 'Ogechi Oviakwu',
        role: 'Head of Sales',
        email: 'ogechi.oviakwu@structuredresource.com',
        linkedin: 'https://www.linkedin.com/in/',
        photo: '/assets/img/png/person-2.png'
      },
      features: {
        heading: 'Features',
        description: 'We identify and report suspicious activities related to money laundering and terrorist financing, ensuring compliance with current regulations.',
        list: [
          {
            title: 'Risk Assessment',
            description: 'Benefit from our institution-specific risk/threat analysis system. We manage your security risks,  taking into account the business environment, products and  processes.'
          },
          {
            title: 'Alert & Case Manager',
            description: 'Our compliance officers handle alerts from the “source systems”, investigating details for decision making and file suspicious Activity Reports (SARs) to the local authorities.'
          },
          {
            title: 'Tax Regulations Compliance',
            description: 'Fast implementation of FATCA and OECD CRS tax reporting requirements at banks & insurances. We help you comply with IRS OECD CRS regulations.'
          },
          {
            title: 'Risk and Compliance Cockpit',
            description: 'Enable real-time screening of your swift, SEPA and other payments against multiple watchlists (OFAC, BOE, UN. World Check etc) ensuring that organizations on whom sanctions have been imposed can no longer access financial services or resources.'
          }
        ]
      },
      benefits: {
        heading: 'Benefits',
        list: [
          {
            title: 'Business Partner Screening'
          },
          {
            title: 'Enabled secure data transfer to IRS & national tax authorities'
          },
          {
            title: 'Sanction Filtering'
          }
        ]
      },
      testimonial: {
        quote: 'We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more...',
        logo: '/assets/img/png/partners/color-full/chevron.png',
        name: 'Ciroma Chukwuma',
        role: 'Executive Advisor'
      }
    },
    {
      id: 'application-development',
      title: 'Application Development',
      description: 'We are passionate about creating outstanding software solutions that create value for your business and lead to success by building smart & scalable solutions.',
      tag: 'Application Development',
      coverImage: '/assets/img/png/solutions/application-development.png',
      contactPerson: {
        name: 'Ogechi Oviakwu',
        role: 'Head of Sales',
        email: 'ogechi.oviakwu@structuredresource.com',
        linkedin: 'https://www.linkedin.com/in/',
        photo: '/assets/img/png/person-2.png'
      },
      features: {
        heading: 'Features',
        description: 'We identify and report suspicious activities related to money laundering and terrorist financing, ensuring compliance with current regulations.',
        list: [
          {
            title: 'Risk Assessment',
            description: 'Benefit from our institution-specific risk/threat analysis system. We manage your security risks,  taking into account the business environment, products and  processes.'
          },
          {
            title: 'Alert & Case Manager',
            description: 'Our compliance officers handle alerts from the “source systems”, investigating details for decision making and file suspicious Activity Reports (SARs) to the local authorities.'
          },
          {
            title: 'Tax Regulations Compliance',
            description: 'Fast implementation of FATCA and OECD CRS tax reporting requirements at banks & insurances. We help you comply with IRS OECD CRS regulations.'
          },
          {
            title: 'Risk and Compliance Cockpit',
            description: 'Enable real-time screening of your swift, SEPA and other payments against multiple watchlists (OFAC, BOE, UN. World Check etc) ensuring that organizations on whom sanctions have been imposed can no longer access financial services or resources.'
          }
        ]
      },
      benefits: {
        heading: 'Benefits',
        list: [
          {
            title: 'Business Partner Screening'
          },
          {
            title: 'Enabled secure data transfer to IRS & national tax authorities'
          },
          {
            title: 'Sanction Filtering'
          }
        ]
      },
      testimonial: {
        quote: 'We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more...',
        logo: '/assets/img/png/partners/color-full/chevron.png',
        name: 'Ciroma Chukwuma',
        role: 'Executive Advisor'
      }
    },
  ];

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.activeService = this.services.filter(x => x.id === params.title)[0];
    });

  }

}
