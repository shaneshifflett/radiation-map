var annotations = [
    {
        'type': 'point',
        'latlng': [37.81951412782624,-122.36582994461058],
        'id': '5',
        'name': 'Building 3, Area 1',
        'textSegments': {
            'currently': 'Occasional commercial film studio',
            'cause': 'Repair of ships exposed to radiation from atomic bomb tests. An optical shop handled radioactive materials.',
            'potentialContaminents': 'Ra-226 and Th-232',
            'recommendedSteps': 'Scoping floor spaces and sewer drains for the optical shop.',
            'contaminationLikelihood': 'likely (in drains)'
        }
    },
    {
        'type': 'point',
        'id': '2',
        'latlng': [37.827887153902005,-122.36960649490356],
        'name': 'Building 570, Area 5',
        'textSegments': {
            'currently': 'Storage and office building for cleanup of contaminated site.',
            'cause': 'Contaminated soil from Site 12 placed in the yard surrounding the building.',
            'potentialContaminents': 'Ra-226',
            'recommendedSteps': 'Do a survey of structures and yard.',
            'contaminationLikelihood': 'unlikely', 
        }
    },
    {
        'type': 'point',
        'latlng': [37.831209,-122.370106],
        'id': '-1',
        'name': 'USS Pandemonium Site II (NE), Area 6',
        'textSegments': {
            'currently': 'NA',
            'cause': 'Unlicensed radioactive sources used to check instruments, procedures for disposal of radioactive sources may not have been followed. Radioactive decontamination training performed here.',
            'potentialContaminents': 'Ra-226, Cs-137',
            'recommendedSteps': 'A scoping survey of the concrete holding tanks, structures, and ground surface in the former training area.',
            'contaminationLikelihood': 'unlikely', 
        }
    },
    {
        'type': 'point',
        'id': '-1',
        'latlng': [37.830641,-122.370004],
        'name': 'Former Salvage Yard Site outside Building 327, Area 6',
        'textSegments': {
            'currently': 'Sewage Treatment Plant',
            'cause': 'Salvage yards handle industrial debris, which are often radiologically contaminated.',
            'potentialContaminents': 'Ra-226',
            'recommendedSteps': 'Complete scoping survey of ground surface in sewage treatment plant',
            'contaminationLikelihood': 'unlikely', 
        }
    },
    {
        'type': 'point',
        'latlng': [37.830259903513955,-122.37108707427979],
        'id': '6',
        'name': 'Waste and Clean Soil Stockpile/Loading and decontamination Site (also known as the site 6 RCA), Area 6',
        'textSegments': {
            'currently': 'Open Area used for remediation of the site',
            'cause': 'Contaminated soil associated with Site 12 was moved here and repacked for shipment.',
            'potentialContaminents': 'Ra-226',
            'recommendedSteps': 'Complete survey of the ground surface in the site.',
            'contaminationLikelihood': 'unlikely', 
        }
    },
    {
        'type': 'point',
        'id': '-1',
        'latlng': [37.824739,-122.376345],
        'name': 'USS Pandemonium Site I (NW), Area 8',
        'textSegments': {
            'currently': 'Multi-family housing',
            'cause': 'Radiological handling in the salvage and waste disposal area.  Nuclear, Biological, and Chemical Warfare School may have conducted unlicensed checks of radioactive sources or failed to comply with procedures.',
            'potentialContaminents': 'Ra-226 and Cs-137',
            'recommendedSteps': 'Complete scoping survey of former holding tanks, structures, and ground surface at site. Gamma ray walkover survey of roads not previously tested.',
            'contaminationLikelihood': 'unlikely', 
        }
    },
    {
        'type': 'point',
        'latlng': [37.82571771605949,-122.37325429916383],
        'id': '30',
        'name': 'Former storage areas and sites 30 and 31, Area 8',
        'textSegments': {
            'currently': 'Elementary school, daycare center, storage area, parking lot',
            'cause': 'Salvage yards that handle industrial debris tend to be radiologically contaminated. Higher levels of Ra-226 detected during excavation, possibly from a deteriorated metal gauge.',
            'potentialContaminents': 'Ra-226',
            'recommendedSteps': 'Soil remediation done in 2010.  Phase II remediation for Site 31 ongoing. Survey after remediation.',
            'contaminationLikelihood': 'likely', 
        }
    },
    {
        'type': 'point',
        'latlng': [37.8264295698818,-122.37376928329466],
        'id': '31',
        'name': 'Former storage areas and sites 30 and 31, Area 8',
        'textSegments': {
            'currently': 'Elementary school, daycare center, storage area, parking lot',
            'cause': 'Salvage yards that handle industrial debris tend to be radiologically contaminated. Higher levels of Ra-226 detected during excavation, possibly from a deteriorated metal gauge.',
            'potentialContaminents': 'Ra-226',
            'recommendedSteps': 'Soil remediation done in 2010.  Phase II remediation for Site 31 ongoing. Survey after remediation.',
            'contaminationLikelihood': 'likely', 
        }
    },
    {
        'type': 'point',
        'id': '4',
        'latlng': [37.824582125509764,-122.36582994461058],
        'name': 'Building 342, Area 4',
        'textSegments': {
            'currently': 'Storage Area',
            'cause': 'Housed the Radiation Detection, Indication And Computation Maintenance school, and instrument calibration and instruction required periodic leaking of radioactive materials. Counting room for testing contamination.',
            'potentialContaminents': 'Ra-226, Cs-137',
            'recommendedSteps': 'Scope and survey of structure and sanitary sewer line.',
            'contaminationLikelihood': 'unlikely', 
        }
    },
    {
        'type': 'point',
        'latlng': [37.82554822604209,-122.36535787582399],
        'id': '3',
        'name': 'Former Salvage Yard (Lot 69), Area 4',
        'textSegments': {
            'currently': 'Storage Area',
            'cause': '1962-1968 salvage yard. Separately listed as a hazardous waste area by 1996.',
            'potentialContaminents': 'Ra-226',
            'recommendedSteps': 'Scoping survey of the ground surface',
            'contaminationLikelihood': 'unlikely', 
        }
    },
    {
        'type': 'irradiated',
        'id': '12',
        'name': 'Site 12',
        'textSegments': {
            'currently': '900 two-story residential housing units',
            'potentialContaminents': 'Ra-226',
            'cause': 'Excavated 581 trenches, low level radiation determined to be natural. Follow-ups by Navy say they are naturally occurring Th-232 and Ra-226.',
            'recommendedSteps': 'Gamma walk-over surveys',
            'contaminationLikelihood': 'NA'
        }
    },
    {
        'type': 'point',
        'id': '-1',
        'latlng': [37.822904,-122.364995],
        'name': 'Building 233, Area 2',
        'textSegments': {
            'currently': 'Demolished building (2011)',
            'cause': '1950 Radium sulfate spill was cleaned up at the time, but a 2007 Survey found piping could be impacted.',
            'recommendedSteps': 'Surveys to make sure cleanup meets current standards, remediation of sewer system and surrounding areas.',
            'potentialContaminents': 'Ra-226',
            'contaminationLikelihood': 'NA',
        }
    },
    {
        'type': 'point',
        'latlng': [37.8243617850207,-122.36565828323364],
        'id': '1',
        'name': 'Buildings 343 and 344, Area 4',
        'textSegments': {
            'currently': 'Radioactive contamination cleaned up and disposed of, cleared for use in 2007 and 2008.',
            'cause': "Two alpha radiation sources discovered and decontaminated in the 70's. A 1988 investigation found it incomplete.",
            'recommendedSteps': 'NA',
            'potentialContaminents': 'NA',
            'contaminationLikelihood': 'NA',
        }
    },
    {
        'type': 'point',
        'latlng': [37.830870026795985,-122.37596869468689],
        'id': '1207',
        'name': 'Salvage Waste Disposal Area 1231/1233, 1207/1209, A& B, Area 7 and Area 8',
        'textSegments': {
            'currently': 'Screening soils for contaminates. Future work: Cleanup of soil, follow-up testing to confirm by 2014.',
            'cause': 'Waste disposal. Past studies found elevated Ra-226.',
            'recommendedSteps': 'NA',
            'potentialContaminents': 'Ra-226',
            'contaminationLikelihood': 'NA',
        }
    },
    {
        'type': 'point',
        'latlng': [37.831980099271526,-122.37327575683594],
        'id': '1231',
        'name': 'Salvage Waste Disposal Area 1231/1233, 1207/1209, A& B, Area 7 and Area 8',
        'textSegments': {
            'currently': 'Screening soils for contaminates. Future work: Cleanup of soil, follow-up testing to confirm by 2014.',
            'cause': 'Waste disposal. Past studies found elevated Ra-226.',
            'recommendedSteps': 'NA',
            'potentialContaminents': 'Ra-226',
            'contaminationLikelihood': 'NA',
        }
    }
];