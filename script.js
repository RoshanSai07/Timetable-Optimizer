// Sample data with more realistic slots
const courseData = {
  CSE1022: {
    name: "Introduction to Programming",
    teachers: [
      { name: "RAVI SANKAR BARPANDA", slots: ["D1"], rating: 4.883 },
      { name: "RAVI SANKAR BARPANDA", slots: ["D2"], rating: 4.883 },
      { name: "Prof.Nagendra Panini Challa", slots: ["C1"], rating: 4.417 },
      { name: "Prof.Eswaraiah Rayachoti", slots: ["F1"], rating: 3.77 },
      { name: "AJITH JUBILSON E", slots: ["F1"], rating: 3.86 },
      { name: "Prof.Syed Khasim", slots: ["F2"], rating: 2.957 },
      { name: "JAGADEESH", slots: ["D1"], rating: 3.323 },
      { name: "Prof.Bharathi V C", slots: ["D1"], rating: 3.487 },
      { name: "Prof.Aravapalli Rama Satish", slots: ["C1"], rating: 2.257 },
      { name: "Prof.Afzal Hussain Shahid", slots: ["F1"], rating: 3.25 },
      { name: "Prof.Karthika Natarajan", slots: ["F2"], rating: 2.307 },
      { name: "ANANTHA HARITHA", slots: ["D1"], rating: "-" },
      { name: "ANANTHA HARITHA", slots: ["D2"], rating: "-" },
      { name: "BATTULA VENKATA SATISH BABU", slots: ["C2"], rating: "-" },
      { name: "DASARI RAJIV KUMAR", slots: ["D2"], rating: "-" },
      { name: "DHULIPALLA NAGAJYOTHI", slots: ["C2"], rating: "-" },
      { name: "INDURTHI SRIKANTH", slots: ["D1"], rating: "-" },
      { name: "INDURTHI SRIKANTH", slots: ["D2"], rating: "-" },
      { name: "KANAKA DURGA", slots: ["C1"], rating: "-" },
      { name: "KANAKA DURGA", slots: ["C2"], rating: "-" },
      { name: "KARNA KRISHNAVENI", slots: ["D1"], rating: "-" },
      { name: "KARNA KRISHNAVENI", slots: ["D2"], rating: "-" },
      { name: "KILLI DURGA BHAVANI", slots: ["F2"], rating: "-" },
      { name: "MADAPATI SRI LAKSHMI", slots: ["C1"], rating: "-" },
      { name: "MADAPATI SRI LAKSHMI", slots: ["C2"], rating: "-" },
      { name: "MUNIPALLI UMA MAHESWARA RAO", slots: ["C1"], rating: "-" },
      { name: "MUNIPALLI UMA MAHESWARA RAO", slots: ["C2"], rating: "-" },
      { name: "MUTTANGI CHANDRA SEKHAR", slots: ["F1"], rating: "-" },
      { name: "MUTTANGI CHANDRA SEKHAR", slots: ["F2"], rating: "-" },
      { name: "NAGA MALLESWARARAO P", slots: ["C2"], rating: "-" },
      { name: "NAGA MALLESWARARAO P", slots: ["D2"], rating: "-" },
      { name: "NAGAEESWARI BODAPATI", slots: ["F1"], rating: "-" },
      { name: "ODNALA SRINIVAS", slots: ["F2"], rating: "-" },
      { name: "P.ADI LAKSHMI", slots: ["C1"], rating: "-" },
      { name: "P.ADI LAKSHMI", slots: ["C2"], rating: "-" },
      { name: "PATAN MUSHIYA KATOON", slots: ["C1"], rating: "-" },
      { name: "Prof.Hari Kishan Kondaveeti", slots: ["F2"], rating: "-" },
      { name: "RANJITH KUMAR BANALA", slots: ["F1"], rating: "-" },
      { name: "SAMBASIVA RAO GUMMA", slots: ["F2"], rating: "-" },
      { name: "SHAIK KHASIM BASHA", slots: ["F1"], rating: "-" },
      { name: "SHAIK NEELOFAR", slots: ["F1"], rating: "-" },
      { name: "SHAIK NEELOFAR", slots: ["F2"], rating: "-" },
      { name: "SHAIK SUFIA", slots: ["C2"], rating: "-" },
      { name: "SUDHEER", slots: ["D1"], rating: "-" },
      { name: "TANUKONDA PADMAJA", slots: ["D1"], rating: "-" },
      { name: "TANUKONDA PADMAJA", slots: ["D2"], rating: "-" },
      { name: "YALLANTI SOWJANYA KUMARI", slots: ["C1"], rating: "-" },
      { name: "YAMINI KODALI", slots: ["D2"], rating: "-" },
    ],
  },
  CSE2001: {
    name: "Data Structures and Algorithms",
    teachers: [
      { name: "DR ANUPRIYA", slots: ["D1", "TD1"], rating: 3.577 },
      { name: "Prof.Gopikrishnan S", slots: ["F2", "TF2"], rating: 4.247 },
      {
        name: "Prof.Naga Jagadesh Bommagani",
        slots: ["F1", "TF1"],
        rating: 4.6,
      },
      { name: "Prof.Sheela Jayachandran", slots: ["D2", "TD2"], rating: 4.165 },
      { name: "Prof.Sheela Jayachandran", slots: ["D1", "TD1"], rating: 4.165 },
      {
        name: "Prof.Dasari Venkata Lakshmi",
        slots: ["F1", "TF1"],
        rating: 4.147,
      },
      { name: "Prof.Udit Narayana Kar", slots: ["F2", "TFF2"], rating: 3.646 },
      { name: "DEVARAKONDA NAGARAJU", slots: ["C2", "TC2"], rating: 4.0 },
      { name: "ASISH KUMAR DALAI", slots: ["D1", "TD1"], rating: 3.61 },
      { name: "Prof.Sandipan Maiti", slots: ["D2", "TD2"], rating: 3.483 },
      {
        name: "Prof.Radha Mohan Pattanayak",
        slots: ["D2", "TD2"],
        rating: 2.56,
      },
      {
        name: "Prof.Radha Mohan Pattanayak",
        slots: ["D1", "TD1"],
        rating: 2.56,
      },
      { name: "Prof.Vikash Kumar Singh", slots: ["D2", "TD2"], rating: 3.023 },
      {
        name: "Prof.Yamarthi Narasimha Rao",
        slots: ["C1", "TC1"],
        rating: 3.563,
      },
      { name: "NARESH SAMMETA", slots: ["C1", "TCC1"], rating: 2.527 },
      {
        name: "Prof.SOUBHAGYA SANKAR BARPANDA",
        slots: ["F2", "TF2"],
        rating: 3.017,
      },
      {
        name: "Prof.SOUBHAGYA SANKAR BARPANDA",
        slots: ["C1", "TC1"],
        rating: 3.017,
      },
      {
        name: "Prof.Jonnadula Harikiran",
        slots: ["D1", "TDD1"],
        rating: 2.293,
      },
      { name: "Prof.Sachi Nandan Mohanty", slots: ["C1", "TC1"], rating: 1.35 },
      { name: "ADLA PADMA", slots: ["F1", "TF1"], rating: "-" },
      { name: "BALUSA BHANU CHANDER", slots: ["D1", "TDD1"], rating: "-" },
      { name: "BEESETTI VANITHA", slots: ["C2", "TC2"], rating: "-" },
      { name: "BEESETTI VANITHA", slots: ["C1", "TCC1"], rating: "-" },
      { name: "DR. D. SANTHADEVI", slots: ["C1", "TCC1"], rating: "-" },
      { name: "DR. D. SANTHADEVI", slots: ["C2", "TC2"], rating: "-" },
      { name: "DR. DEEPANRAMKUMAR P", slots: ["F2", "TF2"], rating: "-" },
      { name: "DR. DEEPANRAMKUMAR P", slots: ["F1", "TF1"], rating: "-" },
      { name: "HAJARATHAIAH", slots: ["D2", "TDD2"], rating: "-" },
      { name: "HAJARATHAIAH", slots: ["D1", "TD1"], rating: "-" },
      { name: "MANTRAVADI GAYATHRI", slots: ["C2", "TCC2"], rating: "-" },
      { name: "PAMIDI PRAMEELA", slots: ["D2", "TDD2"], rating: "-" },
      { name: "PAMIDI PRAMEELA", slots: ["C2", "TCC2"], rating: "-" },
      { name: "PAMULAPATI ASHOK REDDY", slots: ["D2", "TDD2"], rating: "-" },
      { name: "PRIYANKA SINGH", slots: ["F2", "TF2"], rating: "-" },
      { name: "PRIYANKA SINGH", slots: ["F1", "TF1"], rating: "-" },
      {
        name: "Prof. Azees Maria John Francis",
        slots: ["F1", "TFF1"],
        rating: "-",
      },
      { name: "PUJARI JEEVANA JYOTHI", slots: ["D2", "TD2"], rating: "-" },
      { name: "PUJARI JEEVANA JYOTHI", slots: ["C1", "TCC1"], rating: "-" },
      { name: "S V KISHORE BABU", slots: ["F2", "TFF2"], rating: "-" },
      { name: "S V KISHORE BABU", slots: ["F1", "TFF1"], rating: "-" },
      { name: "SAMUKA MOHANTY", slots: ["F2", "TF2"], rating: "-" },
      { name: "SAMUKA MOHANTY", slots: ["D1", "TDD1"], rating: "-" },
      { name: "SANAL KUMAR T S", slots: ["C2", "TC2"], rating: "-" },
      { name: "SANAL KUMAR T S", slots: ["C1", "TC1"], rating: "-" },
      { name: "SHAIK MAHABOOB BASHA", slots: ["C2", "TC2"], rating: "-" },
      { name: "SHAIK MAHABOOB BASHA", slots: ["F1", "TFF1"], rating: "-" },
      { name: "SUBBA RAO DUSARI", slots: ["F2", "TFF2"], rating: "-" },
      { name: "SUBBA RAO DUSARI", slots: ["C2", "TCC2"], rating: "-" },
    ],
  },
  MAT1003: {
    name: "Discrete Mathematical Structures",
    teachers: [
      { name: "Prof.Soumen Kundu", slots: ["B1", "TB1", "TBB1"], rating: 4.89 },
      { name: "Prof.Piu Kundu", slots: ["B2", "TB2", "TBB2"], rating: 4.07 },
      {
        name: "Prof.Peeyush Singh",
        slots: ["B2", "TB2", "TBB2"],
        rating: 4.205,
      },
      { name: "Prof.Francis P", slots: ["A2", "TA2", "TAA2"], rating: 4.06 },
      { name: "Prof.Francis P", slots: ["B1", "TB1", "TBB1"], rating: 4.06 },
      {
        name: "Prof.Santunu Mandal",
        slots: ["B1", "TB1", "TBB1"],
        rating: 4.07,
      },
      {
        name: "Prof.Santunu Mandal",
        slots: ["B2", "TB2", "TBB2"],
        rating: 4.07,
      },
      { name: "DR.NIMAI SARKAR", slots: ["E1", "TE1", "TEE1"], rating: 3.96 },
      {
        name: "Prof.Pratik Premadarshi Ray",
        slots: ["B1", "TB1", "TBB1"],
        rating: 3.54,
      },
      {
        name: "Prof.Pratik Premadarshi Ray",
        slots: ["B2", "TB2", "TBB2"],
        rating: 3.54,
      },
      {
        name: "Prof.Shalini Thakur",
        slots: ["A1", "TA1", "TAA1"],
        rating: 3.23,
      },
      {
        name: "Prof.Shalini Thakur",
        slots: ["B1", "TB1", "TBB1"],
        rating: 3.23,
      },
      { name: "Prof.V.Raja", slots: ["A1", "TA1", "TAA1"], rating: 3.04 },
      { name: "Prof.V.Raja", slots: ["A2", "TA2", "TAA2"], rating: 3.04 },
      {
        name: "Prof.Davala Ravi Kumar",
        slots: ["A2", "TA2", "TAA2"],
        rating: 3.77,
      },
      { name: "Prof.Manisha Maity", slots: ["B1", "TB1", "TBB1"], rating: 3.6 },
      { name: "Prof.Manisha Maity", slots: ["B2", "TB2", "TBB2"], rating: 3.6 },
      {
        name: "DR.VANACHARLA PUJITHA",
        slots: ["A1", "TA1", "TAA1"],
        rating: 3.19,
      },
      {
        name: "Prof.Chandan Kumar Thakur",
        slots: ["A2", "TA2", "TAA2"],
        rating: 2.48,
      },
      { name: "DR.PRASHANT PATEL", slots: ["A2", "TA2", "TAA2"], rating: 2.52 },
      { name: "DR.PRASHANT PATEL", slots: ["E1", "TE1", "TEE1"], rating: 2.52 },
      {
        name: "Prof.Prashanth Maroju",
        slots: ["B2", "TB2", "TBB2"],
        rating: 2.6,
      },
      {
        name: "Prof.Venkatarajam M",
        slots: ["A1", "TA1", "TAA1"],
        rating: 2.66,
      },
      { name: "DR.SANTANU NANDI", slots: ["A1", "TA1", "TAA1"], rating: 1.96 },
      {
        name: "Prof.Arun Kumar Yadav",
        slots: ["E1", "TE1", "TEE1"],
        rating: 1.88,
      },
      {
        name: "Prof.Arun Kumar Yadav",
        slots: ["E2", "TE2", "TEE2"],
        rating: 1.88,
      },
      {
        name: "SHOBHIT KUMAR SRIVASTAVA",
        slots: ["E1", "TE1", "TEE1"],
        rating: 1.67,
      },
      {
        name: "SHOBHIT KUMAR SRIVASTAVA",
        slots: ["E2", "TE2", "TEE2"],
        rating: 1.67,
      },
      {
        name: "AMRENDRA SINGH GILL",
        slots: ["E2", "TE2", "TEE2"],
        rating: "-",
      },
      {
        name: "Dr Pradip Ramesh Patle",
        slots: ["A1", "TA1", "TAA1"],
        rating: "-",
      },
      {
        name: "Dr Pradip Ramesh Patle",
        slots: ["E2", "TE2", "TEE2"],
        rating: "-",
      },
      { name: "DR. GOKULNATH M", slots: ["E2", "TE2", "TEE2"], rating: "-" },
      {
        name: "Prof.Perumandla Karunakar",
        slots: ["B1", "TB1", "TBB1"],
        rating: "-",
      },
      {
        name: "Prof.Rajashekar Naraveni",
        slots: ["B2", "TB2", "TBB2"],
        rating: "-",
      },
      {
        name: "Prof.Sudhakar Matle",
        slots: ["A1", "TA1", "TAA1"],
        rating: "-",
      },
      {
        name: "Prof.Sudhakar Matle",
        slots: ["A2", "TA2", "TAA2"],
        rating: "-",
      },
      { name: "S V GOMATHI", slots: ["A2", "TA2", "TAA2"], rating: "-" },
      { name: "S V GOMATHI", slots: ["E1", "TE1", "TEE1"], rating: "-" },
      { name: "SATPAL SINGH", slots: ["E1", "TE1", "TEE1"], rating: "-" },
      { name: "SATPAL SINGH", slots: ["E2", "TE2", "TEE2"], rating: "-" },
      { name: "SHAZIA SABIR", slots: ["E1", "TE1", "TEE1"], rating: "-" },
      { name: "SHAZIA SABIR", slots: ["E2", "TE2", "TEE2"], rating: "-" },
    ],
  },
  MGT1001: {
    name: "Ethics and Values - Lab Only",
    teachers: [
      { name: "DR.SUNIL KHOSLA", slots: ["L26", "L27"], rating: 4.44 },
      { name: "DR.SUNIL KHOSLA", slots: ["L4", "L5"], rating: 4.44 },
      { name: "K. DEEPANJAN", slots: ["L43", "L44"], rating: 4.67 },
      { name: "Prof.Suresh Jagannadham", slots: ["L33", "L34"], rating: 4.49 },
      { name: "Prof.Suresh Jagannadham", slots: ["L39", "L40"], rating: 4.49 },
      { name: "Prof.Suresh Jagannadham", slots: ["L35", "L36"], rating: 4.49 },
      { name: "Prof.Suresh Jagannadham", slots: ["L49", "L50"], rating: 4.49 },
      { name: "Prof.Chandan Vishwas", slots: ["L39", "L40"], rating: 4.14 },
      { name: "Prof.Joseph Alugula", slots: ["L14", "L15"], rating: 4.18 },
      { name: "AMRITA PURAKAYASTHA", slots: ["L45", "L46"], rating: 4.0 },
      { name: "ASHRAF PULIKKAMATH", slots: ["L37", "L38"], rating: 3.19 },
      { name: "Prof.Sanjit Chakraborty", slots: ["L33", "L34"], rating: 2.84 },
      { name: "Prof.Sanjit Chakraborty", slots: ["L53", "L54"], rating: 2.84 },
      { name: "Prof.Sanjit Chakraborty", slots: ["L8", "L9"], rating: 2.84 },
      { name: "Prof.Sanjit Chakraborty", slots: ["L31", "L32"], rating: 2.84 },
      { name: "ANINDITA ROY", slots: ["L47", "L48"], rating: "-" },
      { name: "ANINDITA ROY", slots: ["L41", "L42"], rating: "-" },
      { name: "DR ASWATHY M", slots: ["L14", "L15"], rating: "-" },
      { name: "DR. TANMOY DAS", slots: ["L51", "L52"], rating: "-" },
      { name: "GAURAV SONIK", slots: ["L55", "L56"], rating: "-" },
      { name: "GAURAV SONIK", slots: ["L2", "L3"], rating: "-" },
      { name: "GAURAV SONIK", slots: ["L10", "L11"], rating: "-" },
      { name: "K KINJARI", slots: ["L53", "L54"], rating: "-" },
      { name: "KRISHNA NAIR J", slots: ["L49", "L50"], rating: "-" },
      { name: "KRISHNA NAIR J", slots: ["L4", "L5"], rating: "-" },
      { name: "KRISHNA NAIR J", slots: ["L47", "L48"], rating: "-" },
      { name: "NEHA KUMARI", slots: ["L20", "L21"], rating: "-" },
      { name: "NEHA KUMARI", slots: ["L43", "L44"], rating: "-" },
      {
        name: "Prof.Pottumuthu Kanaka Himabindu",
        slots: ["L22", "L23"],
        rating: "-",
      },
      {
        name: "Prof.Renuprasad Hemkiran Patki",
        slots: ["L55", "L56"],
        rating: "-",
      },
      { name: "SAJAD NABI DAR", slots: ["L26", "L27"], rating: "-" },
      { name: "SAJAD NABI DAR", slots: ["L41", "L42"], rating: "-" },
      { name: "SAJAD NABI DAR", slots: ["L28", "L29"], rating: "-" },
      { name: "SOUMIK SARKAR", slots: ["L22", "L23"], rating: "-" },
    ],
  },
  MGT1040: {
    name: "Entrepreneurship - Theory Only",
    teachers: [
      { name: "Prof.Deepjoy Katuwal", slots: ["D2"], rating: 4.86 },
      { name: "Prof.Karishma Bisht", slots: ["E2"], rating: 4.05 },
      { name: "Prof.Karishma Bisht", slots: ["D1"], rating: 4.05 },
      { name: "Prof.Aby Abraham", slots: ["E1"], rating: 3.87 },
      { name: "Prof.Aby Abraham", slots: ["D2"], rating: 3.87 },
      { name: "DR. SHAIKU SHAHIDA SAHEB", slots: ["G1"], rating: 3.77 },
      { name: "DR. SHAIKU SHAHIDA SAHEB", slots: ["G2"], rating: 3.77 },
      { name: "DR.KASHIF BEG", slots: ["G1"], rating: 2.4 },
      { name: "DRIPTA DE JOARDER", slots: ["E2"], rating: 2.42 },
      { name: "DRIPTA DE JOARDER", slots: ["D1"], rating: 2.42 },
      { name: "PALAGANI VIJAYA BHASKARA REDDY", slots: ["G2"], rating: "-" },
      { name: "PALAGANI VIJAYA BHASKARA REDDY", slots: ["D2"], rating: "-" },
      { name: "PALAGANI VIJAYA BHASKARA REDDY", slots: ["D1"], rating: "-" },
      { name: "DR.UMER MUSHTAQ LONE", slots: ["G1"], rating: "-" },
      { name: "DR.UMER MUSHTAQ LONE", slots: ["D1"], rating: "-" },
      { name: "DR.N.PRABHAKAR", slots: ["E2"], rating: "-" },
      { name: "DR.N.PRABHAKAR", slots: ["E1"], rating: "-" },
      { name: "DR.G.SOMA SEKHAR", slots: ["G2"], rating: "-" },
      { name: "DR.G.SOMA SEKHAR", slots: ["G1"], rating: "-" },
      { name: "DR. SENTHAMIZHSELVI.A", slots: ["G2"], rating: "-" },
      { name: "DR. SENTHAMIZHSELVI.A", slots: ["E1"], rating: "-" },
      { name: "DR. SENTHAMIZHSELVI.A", slots: ["E2"], rating: "-" },
      { name: "DR. RAJASHREE NAIK", slots: ["D2"], rating: "-" },
      { name: "DR. RAJASHREE NAIK", slots: ["E1"], rating: "-" },
    ],
  },
  STS2008: {
    name: "Numeric ability and Cognitive Intelligence",
    teachers: [
      { name: "SUPRIYA C", slots: ["A1", "TA1"], rating: "-" },
      { name: "Prof.Sheik Noushad", slots: ["A1", "TA1"], rating: "-" },
      { name: "Prof. Sudharshan", slots: ["A1", "TA1"], rating: "-" },
      { name: "Mamatha", slots: ["A1", "TA1"], rating: "-" },
      { name: "SUPRIYA C", slots: ["A2", "TA2"], rating: "-" },
      { name: "Prof.Yamini Durga", slots: ["A2", "TA2"], rating: "-" },
      { name: "Prof.Sheik Noushad", slots: ["A2", "TA2"], rating: "-" },
      { name: "Prof. Sudharshan", slots: ["A2", "TA2"], rating: "-" },
      { name: "LIKITHA", slots: ["A2", "TA2"], rating: "-" },
      { name: "Prof.Vijay", slots: ["B1", "TB1"], rating: "-" },
      { name: "Prof.Divya Bora", slots: ["B1", "TB1"], rating: "-" },
      { name: "LIKITHA", slots: ["B1", "TB1"], rating: "-" },
      { name: "KALYANI M", slots: ["B1", "TB1"], rating: "-" },
      { name: "Prof.Sheik Noushad", slots: ["B2", "TB2"], rating: "-" },
      { name: "Prof.Divya Bora", slots: ["B2", "TB2"], rating: "-" },
      { name: "Prof. Jesmitha", slots: ["B2", "TB2"], rating: "-" },
      { name: "BHARATHWAJ", slots: ["B2", "TB2"], rating: "-" },
      { name: "Prof.Sheik Noushad", slots: ["C1", "TC1"], rating: "-" },
      { name: "BHARATHWAJ", slots: ["C1", "TC1"], rating: "-" },
      { name: "SUPRIYA C", slots: ["C1", "TCC1"], rating: "-" },
      { name: "Jayesh", slots: ["C1", "TCC1"], rating: "-" },
      { name: "SUPRIYA C", slots: ["C2", "TC2"], rating: "-" },
      { name: "KALYANI M", slots: ["C2", "TC2"], rating: "-" },
      { name: "Prof.Vijay", slots: ["C2", "TCC2"], rating: "-" },
      { name: "Jayesh", slots: ["C2", "TCC2"], rating: "-" },
      { name: "Prof. Jesmitha", slots: ["D1", "TD1"], rating: "-" },
      { name: "KALYANI M", slots: ["D1", "TD1"], rating: "-" },
      { name: "Prof.Divya Bora", slots: ["D1", "TDD1"], rating: "-" },
      { name: "LIKITHA", slots: ["D1", "TDD1"], rating: "-" },
      { name: "Prof.Sheik Noushad", slots: ["D2", "TD2"], rating: "-" },
      { name: "BHARATHWAJ", slots: ["D2", "TD2"], rating: "-" },
      { name: "Prof.Vijay", slots: ["D2", "TDD2"], rating: "-" },
      { name: "Mamatha", slots: ["D2", "TDD2"], rating: "-" },
      { name: "Prof.Yamini Durga", slots: ["E1", "TE1"], rating: "-" },
      { name: "Prof. Jesmitha", slots: ["E1", "TE1"], rating: "-" },
      { name: "Mamatha", slots: ["E1", "TE1"], rating: "-" },
      { name: "LIKITHA", slots: ["E1", "TE1"], rating: "-" },
      { name: "BHARATHWAJ", slots: ["E1", "TE1"], rating: "-" },
      { name: "SUPRIYA C", slots: ["E2", "TE2"], rating: "-" },
      { name: "Prof.Sheik Noushad", slots: ["E2", "TE2"], rating: "-" },
      { name: "Prof.Divya Bora", slots: ["E2", "TE2"], rating: "-" },
      { name: "Prof. Jesmitha", slots: ["E2", "TE2"], rating: "-" },
      { name: "KALYANI M", slots: ["E2", "TE2"], rating: "-" },
      { name: "Prof. Jesmitha", slots: ["F1", "TF1"], rating: "-" },
      { name: "Mamatha", slots: ["F1", "TF1"], rating: "-" },
      { name: "Prof.Divya Bora", slots: ["F1", "TFF1"], rating: "-" },
      { name: "LIKITHA", slots: ["F1", "TFF1"], rating: "-" },
      { name: "SUPRIYA C", slots: ["F2", "TF2"], rating: "-" },
      { name: "BHARATHWAJ", slots: ["F2", "TF2"], rating: "-" },
      { name: "Prof.Vijay", slots: ["F2", "TFF2"], rating: "-" },
      { name: "LIKITHA", slots: ["F2", "TFF2"], rating: "-" },
      { name: "KALYANI M", slots: ["F2", "TFF2"], rating: "-" },
      { name: "Prof.Yamini Durga", slots: ["G1", "TG1"], rating: "-" },
      { name: "Prof.Vijay", slots: ["G1", "TG1"], rating: "-" },
      { name: "Prof.Divya Bora", slots: ["G2", "TG2"], rating: "-" },
      { name: "Prof. Jesmitha", slots: ["G2", "TG2"], rating: "-" },
    ],
  },
};

// Complete slot structure with theory and lab slots
const slotStructure = {
  TUE: {
    T: [
      "TFF1",
      "A1",
      "B1",
      "TC1/G1",
      "D1",
      "",
      "F2",
      "A2",
      "B2",
      "TC2/G2",
      "TDD2",
      "",
    ],
    L: [
      "L1",
      "L2",
      "L3",
      "L4",
      "L5",
      "L6",
      "L31",
      "L32",
      "L33",
      "L34",
      "L35",
      "L36",
    ],
  },
  WED: {
    T: [
      "TGG1",
      "D1",
      "F1",
      "E1/SC2",
      "B1",
      "",
      "D2",
      "TF2/G2",
      "E2/SC1",
      "B2",
      "TCC2",
      "",
    ],
    L: [
      "L7",
      "L8",
      "L9",
      "L10",
      "L11",
      "L12",
      "L37",
      "L38",
      "L39",
      "L40",
      "L41",
      "L42",
    ],
  },
  THU: {
    T: [
      "TEE1",
      "C1",
      "TD1/TG1",
      "TAA1/ECS",
      "TBB1/CLUB",
      "",
      "TE2/SE1",
      "C2",
      "A2",
      "TD2/TG2",
      "TGG2",
      "",
    ],
    L: [
      "L13",
      "L14",
      "L15",
      "L16",
      "L17",
      "L18",
      "L43",
      "L44",
      "L45",
      "L46",
      "L47",
      "L48",
    ],
  },
  FRI: {
    T: [
      "TCC1",
      "TB1",
      "TA1",
      "F1",
      "TE1/SD2",
      "",
      "C2",
      "TB2",
      "TA2",
      "F2",
      "TEE2",
      "",
    ],
    L: [
      "L19",
      "L20",
      "L21",
      "L22",
      "L23",
      "L24",
      "L49",
      "L50",
      "L51",
      "L52",
      "L53",
      "L54",
    ],
  },
  SAT: {
    T: [
      "TDD1",
      "E1/SE1",
      "C1",
      "TF1/G1",
      "A1",
      "",
      "D2",
      "E2/SD1",
      "TAA2/ECS",
      "TBB2/CLUB",
      "TFF2",
      "",
    ],
    L: [
      "L25",
      "L26",
      "L27",
      "L28",
      "L29",
      "L30",
      "L55",
      "L56",
      "L57",
      "L58",
      "L59",
      "L60",
    ],
  },
};

// Time slots
const theoryTimes = [
  "8:50",
  "9:50",
  "10:50",
  "11:50",
  "12:50",
  "",
  "14:50",
  "15:50",
  "16:50",
  "17:50",
  "18:50",
  "",
];
const labTimes = [
  "8:50",
  "9:50",
  "10:50",
  "11:50",
  "12:50",
  "13:30",
  "14:50",
  "15:50",
  "16:50",
  "17:50",
  "18:50",
  "19:30",
];

// DOM Elements
const courseSelect = document.getElementById("course-type");
const confirmBtn = document.getElementById("confirm-courses");
const backBtn = document.getElementById("back-to-courses");
const teacherSection = document.getElementById("teacher-selection");
const teacherContainer = document.getElementById("teacher-options-container");
const generateBtn = document.getElementById("generate-timetable");
const resetBtn = document.getElementById("reset-selection");
const timetableDisplay = document.getElementById("timetable-display");
const timetableGrid = document.getElementById("timetable-grid");

// Store selections
const selections = {
  courses: [],
  teachers: {},
};

// Event Listeners
confirmBtn.addEventListener("click", showTeacherOptions);
backBtn.addEventListener("click", () => {
  teacherSection.classList.add("hidden");
});
generateBtn.addEventListener("click", generateTimetable);
resetBtn.addEventListener("click", resetSelections);

// Show teacher options for selected courses
function showTeacherOptions() {
  const selectedOptions = Array.from(courseSelect.selectedOptions);
  const selectedCourseCodes = selectedOptions.map(
    (opt) => opt.value.split(" - ")[0]
  );

  if (selectedCourseCodes.length === 0) {
    alert("Please select at least one course.");
    return;
  }

  // Merge new courses into selections.courses without duplicates
  selectedCourseCodes.forEach((courseCode) => {
    if (!selections.courses.includes(courseCode)) {
      selections.courses.push(courseCode);
    }
  });

  teacherContainer.innerHTML = ""; // Clear to re-render

  // Render each selected course's teacher options
  selectedCourseCodes.forEach((courseCode) => {
    const course = courseData[courseCode];
    if (!course) return;

    const courseDiv = document.createElement("div");
    courseDiv.className = "course-section card";
    courseDiv.innerHTML = `
      <h3>${courseCode}: ${course.name}</h3>
      <div class="teachers-grid" id="teachers-${courseCode}"></div>
    `;
    teacherContainer.appendChild(courseDiv);

    const teachersContainer = document.getElementById(`teachers-${courseCode}`);

    course.teachers.forEach((teacher) => {
      const slotString = teacher.slots.join("-").replace(/\s+/g, "");
      const uniqueId = `${courseCode}-${teacher.name.replace(
        /\s+/g,
        "-"
      )}-${slotString}`;
      const isSelected = selections.teachers[courseCode] === teacher.name;

      const teacherDiv = document.createElement("div");
      teacherDiv.className = "teacher-card";
      teacherDiv.innerHTML = `
        <input type="radio" name="${courseCode}" id="${uniqueId}" 
               value="${teacher.name}" data-slots="${teacher.slots.join(
        ","
      )}" hidden
               ${isSelected ? "checked" : ""}>
        <label class="card-ui ${
          isSelected ? "selected" : ""
        }" for="${uniqueId}">
          <div class="teacher-name">${teacher.name}</div>
          <div class="teacher-meta">
            <span class="rating">${
              teacher.rating ? "⭐ " + teacher.rating : "No rating"
            }</span>
            <span class="slots">${teacher.slots.join(", ")}</span>
          </div>
        </label>
      `;
      teachersContainer.appendChild(teacherDiv);
    });

    // Re-bind change listeners
    document
      .querySelectorAll(`input[name="${courseCode}"]`)
      .forEach((input) => {
        input.addEventListener("change", (e) => {
          document
            .querySelectorAll(`input[name="${courseCode}"]`)
            .forEach((el) => {
              const label = el
                .closest(".teacher-card")
                .querySelector(".card-ui");
              label.classList.remove("selected");
            });

          const selectedLabel = e.target
            .closest(".teacher-card")
            .querySelector(".card-ui");
          selectedLabel.classList.add("selected");

          // Store in selections
          selections.teachers[courseCode] = e.target.value;
        });
      });
  });

  teacherSection.classList.remove("hidden");
}

// Generate the timetable
function generateTimetable() {
  // Clear previous timetable
  timetableGrid.innerHTML = "";

  // Create header row
  const headerRow = document.createElement("div");
  headerRow.className = "timetable-cell day-header";
  headerRow.textContent = "Time";
  timetableGrid.appendChild(headerRow);

  const days = ["TUE", "WED", "THU", "FRI", "SAT"];
  days.forEach((day) => {
    const dayHeader = document.createElement("div");
    dayHeader.className = "timetable-cell day-header";
    dayHeader.textContent = day;
    timetableGrid.appendChild(dayHeader);
  });

  // Collect all slot assignments
  const slotAssignments = {};
  selections.courses.forEach((courseCode) => {
    const teacherName = selections.teachers[courseCode];
    const teacher = courseData[courseCode].teachers.find(
      (t) => t.name === teacherName
    );
    if (teacher) {
      const slots = teacher.slots;
      slots.forEach((slot) => {
        if (!slotAssignments[slot]) {
          slotAssignments[slot] = [];
        }
        slotAssignments[slot].push({
          code: courseCode,
          name: courseData[courseCode].name,
          teacher: teacher.name,
        });
      });
    }
  });

  // Combine theory and lab times, removing duplicates and empty slots
  const allTimes = [...new Set([...theoryTimes, ...labTimes])]
    .filter((time) => time !== "")
    .sort((a, b) => {
      const [h1, m1] = a.split(":").map(Number);
      const [h2, m2] = b.split(":").map(Number);
      return h1 * 60 + m1 - (h2 * 60 + m2);
    });

  // Create timetable rows
  allTimes.forEach((time) => {
    const timeCell = document.createElement("div");
    timeCell.className = "timetable-cell time-header";
    timeCell.textContent = time;
    timetableGrid.appendChild(timeCell);

    // Check each day for this time slot
    days.forEach((day) => {
      const dayCell = document.createElement("div");
      dayCell.className = "timetable-cell";

      // Check theory slots first
      const theoryIndex = theoryTimes.indexOf(time);
      if (theoryIndex !== -1) {
        const theorySlot = slotStructure[day]["T"][theoryIndex];
        if (theorySlot && slotAssignments[theorySlot]) {
          slotAssignments[theorySlot].forEach((course) => {
            const courseDiv = document.createElement("div");
            courseDiv.className = "course-slot theory-slot";
            courseDiv.textContent = course.code;
            courseDiv.title = `${course.name}\nTeacher: ${course.teacher}`;

            // Mark conflicts
            if (slotAssignments[theorySlot].length > 1) {
              courseDiv.classList.add("conflict-slot");
            }

            dayCell.appendChild(courseDiv);
          });
        }
      }

      // Check lab slots
      const labIndex = labTimes.indexOf(time);
      if (labIndex !== -1) {
        const labSlot = slotStructure[day]["L"][labIndex];
        if (labSlot && slotAssignments[labSlot]) {
          slotAssignments[labSlot].forEach((course) => {
            const courseDiv = document.createElement("div");
            courseDiv.className = "course-slot lab-slot";
            courseDiv.textContent = course.code;
            courseDiv.title = `${course.name}\nTeacher: ${course.teacher}`;

            // Mark conflicts
            if (slotAssignments[labSlot].length > 1) {
              courseDiv.classList.add("conflict-slot");
            }

            dayCell.appendChild(courseDiv);
          });
        }
      }

      timetableGrid.appendChild(dayCell);
    });
  });

  timetableDisplay.classList.remove("hidden");
}

// Reset all selections
function resetSelections() {
  courseSelect.selectedIndex = -1;
  teacherContainer.innerHTML = "";
  selections.courses = [];
  selections.teachers = {};
  teacherSection.classList.add("hidden");
  timetableDisplay.classList.add("hidden");
}
