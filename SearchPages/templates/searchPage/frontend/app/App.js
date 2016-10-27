/**
 * Created by ruslan on 10.10.16.
 */

// import lib
import React from 'react'
import ReactDOM from 'react-dom'


// end import


// data base / State
const Data = {

    category: {
        Theme: [
            {
                Name: 'Lumpy Skin Disease - Cyprus 2014 /Greece 2015 /EU 2016 - Ongoing',

                Description: `Issue established 3 December 2014 following outbreak of LSD on Cyprus.
Separate issue established on 26 August 2015 following outbreak of LSD in Greece.
Issues combined on 5 May 2016 and expanded to cover further incursions in the EU, starting with spread to Bulgaria and Macedonia (FYROM) in April 2016.`,
            },
            {
                Name: 'PKD outbreak US: August 2016 - on-going',

                Description: `August 14:

A dead whitefish floats belly up near the Mayors Landing Fishing Access in the Yellowstone River in Livingston, Mont. on Sunday, Aug. 14, 2016. 
Montana Fish, Wildlife and Parks estimates the fish kill to be in the tens of thousands and issued a closure of all water-based recreation on the Yellowstone from the Yellowstone National Park's northern boundary to Laurel, according to a press release. FWP lab results reveal the catalyst of the killto be Proliferative Kidney Disease ' one of the most serious diseases to impact whitefish and trout.`,
            },
            {
                Name: 'CANADA: Whirling disease. August 2016 - ongoing',

                Description: `August 2016:

The first known Canadian case of whirling disease in fish has been found in Johnson Lake in Banff National Park.

September:

A deadly fish disease discovered for the first time in Canada in late August has now spread to the Bow River, Canadian Food Inspection Agency officials confirmed Monday.`,
            },
            {
                Name: 'Panama disease incursion in North Queensland 2015',

                Description: `A research project to trial banana plants that could tolerate Panama Disease Tropical Race 4 has been thwarted by another plant disease, Banana Freckle.

Panama Tropical Race 4 (TR4) completely devastated the Northern Territory's banana industry in the 1990s and has now been found on a banana farm in far north Queensland.`,
            },
            {
                Name: 'EARLY MORTALITY SYNDROME in SHRIMP [2010 and ongoing]',

                Description: `ORIGINAL SUMMARY

This new disease has been known as early mortality syndrome and is now commonly referred to as acute hepatopancreatic degenerative necrotic syndrome (AHDNS). Mass mortailty of shrimp from AHDNA has been reported in China (2009), Vietnam (2010) and Malaysia (2011). In June 2011, provinces of the Mekong Delta suffered unprecedented losses with tiger shrimp in 40,000 hectares of farm area affected. Over 11,000 hectares of shrimp farms in Bac Lieu have been destroyed. In 6,200 hectares of shrimp farms in In Tra Vinh, about 330 million shrimp have died causing a loss of over VND12 billion. In Soc Trang, 20,000 out of 25,000 hectares of shrimp farms have been destroyed, causing VND1.5 trillion (US$75 million) in losses. Initial evidence led investigators to beleive the disease was caused from microsporidiosis of the hepatopancreas. Relavent reference in the scientific literature may be; Kasetsart J. (2009). The Effects of Microsporidian (Thelohania) Infection on the Growth and Histopathological Changes in Pond-reared Pacific White Shrimp (Litopenaeus vannamei). Nat. Sci. 43: 680 - 688. These views maybe changing with the disease now possibly related to liver necrosis. In Mekong Delta of Vietnam, AHDNA has been associated with the use of pesticides.`,
            },
            {
                Name: 'Oyster herpes OsHV-1 µvar goes global [2010 - ?]',

                Description: `OsHV-1 µvar is spreading around the world. The global spread started with an outbreak in France in 2008. Since then, there have been the following outbreaks: UK 2010 New Zealand 2010 Australia 2010 Netherlands 2011 USA 2011 (OsHV-1) Spain 2011 Japan ? The spread of OsHV-1 µvar around different parts of the world where pacific oysters are grown was forecast by using some of the information found in the AquaticHealth.net database. The forecasts were made with the consideration that OsHV-1 µvar was always present in the oyster population at very low levels. This may not be wholly accurate, and it raises more questions than answers, but it was effective. And supplying spat from hatcheries is like playing Russian roulette. This means any region receiving spat from a hatchery is at risk of an outbreak when the right conditions prevail e.g. Tasmania (ED UPDATE Jan 2016: too late for Tas, prediction is correct and has played out), South Australia (next cab off the rank when temperatures are just right?). Possible solutions: better hatchery biosecurity...`,
            },
            {
                Name: 'Huanglongbing in Central and South America',

                Description: `Uruguay extreme controls to prevent the onset of disease in the citrus Huanglongbing. Nurseries, plantations are inspected and entry of all plant material is prevented from Brazil and Argentina. While the increase border controls to prevent the entry of any plant material, the Ministry of Livestock, Agriculture and Fisheries promotes agreements with citrus enterprises looking to increase inspections of nurseries and crops, to cases of Huanglongbing (HLB) in citrus Argentina. The disease came to Concordia and is generating conflict between Argentine growers and health authorities. It is caused by a bacterium (Candidatus liberobacter asiaticus) and the main vector of transmission are plants without certification of origin (it spreads by buds, grafts, tools, etc.).`
            },
            {
                Name: '2013 -2014 Citrus greening (USA) emergency',

                Description: `Years ago it was citrus canker ravaging groves. The latest natural blight is bacteria called “citrus greening”—and it’s already cost growers millions.

There’s still no real cure for greening, but growers have been inundating their groves with pesticides, which is providing some relief.

However, these pesticides are causing trouble for beekeepers who are also trying to weather some tough environmental stresses.

Harold Curtis has been growing juice oranges in his grove near Fort Myers for almost two decades.  He said he was first a beekeeper. Producing honey has been in his family for generations, but several bad years led Curtis to leave beekeeping for orange groves. Now, “citrus greening” has hit that business hard.`
            },
            {
                Name: 'Following EUS in Africa',

                Description: `February 2011 Epizootic Ulcerative Syndrome (EUS) is spreading in Africa

      The Republic of South Africa is the 4th African country to report the epizootic ulcerative syndrome (EUS) on its territory, following earlier notifications by Botswana, Namibia and Zambia. This disease of fresh-water (fin)fish affects a large number of species and is caused by a fungus (oomycete) Aphanomyces invadans. While the three previous discoveries all occurred in the Chobe-Zambezi river basin, this new discovery was made in the far south of South Africa, in a dam on the Palmiet river, close to Grabouw in the Western Cape province. Lesions were discovered in wild finfish that have been living in the dam for a long time, while recently introduced rainbow trout for a fish farming operation, remained unaffected. EUS is an OIE-listed disease. The OIE Reference Laboratory for this disease is based in Thailand (AAHRI, Bangkok), but a laboratory twinning programme is underway with the University of Zambia (UNZA) . The FAO has produced an information leaflet regarding this disease, which is now also available in French, thanks to the financial support of the OIE Sub-regional Representation for Southern Africa, based in Botswana, one of the affected countries`
            },
            {
                Name: 'Chronic Wasting Disease Norway 2016 /EU? - Emerging',

                Description: `This is the first detection of CWD in Europe and in reindeer. Previously it had been restricted to North America (USA and Canada) and South Korea (following importation of deer/reproductive material from Canada).`
            },
            {
                Name: 'Lake Kinneret - Virus (TiLV) linked to tilapia mortalities [emerging disease Oct 2011 - ongoing]',

                Description: `For over one decade many fish species from the Sea of Galilee (Lake Kinneret - Isreal) have been suspected of dying from a mysterious disease.

The disease has been found in about 15% of the lakes fish population and also in fish ponds in the Hula Valley. So far, the disease is known to affect species such as St. Peter's Fish (tilapia), silver carp, carp, and mullet.

The disease was investigated in September 2011 by Isreal's Ministry of Agriculture Veterinary Services, but at that time no pathogen had been identified. Recent Ministry of Agriculture investigations have identified the problem is worsening in tilapia, which may be linked to the discovery of a virus affecting the eye.`
            },
            {
                Name: 'Foot and mouth disease in South Korea',

                Description: `On 24 July 2014, South Korea reported an outbreak of type O foot and mouth disease in a pig farm in Gyeongsangbuk-do Province to the OIE: http://www.oie.int/wahis_2/public/wahid.php/Reviewreport/Review?page_refer=MapFullEventReport&reportid=15687&newlang=en. Infection was confirmed by antigen capture ELISA and PCR. Media reports suggest that 600 pigs of 1500 on the farm have been culled so far. Media reports suggest that the pigs had not been vaccinated. Vaccination for FMD serotypes O, A and Asia 1 is practiced in South Korea.

On 28 July 2014, South Korea reported a second outbreak around 70km away in a 2000-head piggery.

In May 2014, South Korea's FMD status had been recognised by the World Organisation for Animal Health as free with vaccination.`
            },
            {
                Name: 'International trade in ornamental fish. What are the disease risks?',

                Description: `Researchers from the Western Australian Department of Fisheries say that detection and characterization of viruses of the genus Megalocytivirus in ornamental fish imported into Australia is an an emerging risk to national biosecurity.

Is this an International issue?

Ornamental fish can carry many OIE listed diseases, but there are no International standards, guidelines or recommendations for the ornamental fish industry to use.`
            },
            {
                Name: 'Chile, Salmon farming, antibiotic use: 2015',

                Description: `CHILE - Oceana has been granted access to information on Chile's salmon farming antibiotic use between 2009 and 2013, following a unanimous ruling by Santiago’s Court of Appeals.

“We are pleased to hear the reversal of an incorrect ruling by the Transparency Council. Clearly, this is public information as it allows people to make decisions on fundamental issues, such as health and the environment, in addition to making scrutiny on whether the Government is effectively controlling this industry or not,” stated Alex Muñoz, Vice President for Oceana in Chile.`
            },
            {
                Name: '2014 Shortage in honeybees accounted for crop failures and financial losses',

                Description: `There are only enough honeybees in Britain to properly pollinate a quarter of the country’s crops, scientists claim.

Destruction of huge swathes of grassland and the use of agricultural chemicals have caused a spiralling drop in the populations of honeybees, which are vital for food production.`
            },
            {
                Name: 'HSMI in BC May 2016-emerging',

                Description: `Vancouver, British Columbia - Applying newly introduced and integrated technologies, a team of international researchers, led by Fisheries and Oceans Canada’s (DFO’s) Dr. Kristi Miller, has diagnosed a potential Heart and Skeletal Muscle Inflammation in farmed Atlantic salmon samples collected from a B.C. aquaculture facility in 2013-2014. This research was undertaken as part of the Strategic Salmon Health Initiative (SSHI), a collaboration between DFO, the Pacific Salmon Foundation and Genome British Columbia to better understand the distribution of microbes and diseases in wild and cultured (hatchery and aquaculture) salmon in B.`
            },
            {
                Name: 'African bushmeat trade',

                Description: `The illegal trade and sale of African bushmeat presents a number of serious biosecurity risks. In addition the trade and sale of these products has a significant impact on the maintenance of populations of protected (CITES) or endangered species.

This issue page has been created to monitor information on African bushmeat over the issue period to assist with understanding of this trade.`
            },
        ],
        Group: [
            {
                Name: 'Ongoing'
            },
            {
                Name: 'Emerging'
            },
            {
                Name: 'Past'
            },
            {
                Name: 'Potential'
            },
            {
                Name: 'Africa'
            },
            {
                Name: 'Chile'
            },
            {
                Name: 'risks'
            },
            {
                Name: 'Foot'
            },
            {
                Name: 'population'
            },
            {
                Name: 'Panama'
            },
            {
                Name: 'August'
            },

        ],
        Issue: [
            {
                Name: 'Citrus greening'
            },
            {
                Name: 'Huanglongbing in Central'
            },
            {
                Name: 'integrated technologies'
            },
            {
                Name: 'Whirling disease'
            },
            {
                Name: 'the first time in Canada'
            },
            {
                Name: 'Issues combined'
            },
            {
                Name: 'the disease risks'
            },
            {
                Name: 'Foot'
            },
            {
                Name: 'the fish kill'
            },
            {
                Name: 'Mayors Landing Fishing Access'
            },
            {
                Name: 'Whirling disease'
            },

        ],
        Searches: [
            {
                Name: 'Lumpy Skin Disease - Cyprus 2014 /Greece 2015 /EU 2016 - Ongoing',

                Main_Query: `Issue established 3 December 2014 following outbreak of LSD on Cyprus.
Separate issue established on 26 August 2015 following outbreak of LSD in Greece.
Issues combined on 5 May 2016 and expanded to cover further incursions in the EU, starting with spread to Bulgaria and Macedonia (FYROM) in April 2016.`,
            },
            {
                Name: 'PKD outbreak US: August 2016 - on-going',

                Main_Query: `August 14:

A dead whitefish floats belly up near the Mayors Landing Fishing Access in the Yellowstone River in Livingston, Mont. on Sunday, Aug. 14, 2016. 
Montana Fish, Wildlife and Parks estimates the fish kill to be in the tens of thousands and issued a closure of all water-based recreation on the Yellowstone from the Yellowstone National Park's northern boundary to Laurel, according to a press release. FWP lab results reveal the catalyst of the killto be Proliferative Kidney Disease ' one of the most serious diseases to impact whitefish and trout.`,
            },
            {
                Name: 'CANADA: Whirling disease. August 2016 - ongoing',

                Main_Query: `August 2016:

The first known Canadian case of whirling disease in fish has been found in Johnson Lake in Banff National Park.

September:

A deadly fish disease discovered for the first time in Canada in late August has now spread to the Bow River, Canadian Food Inspection Agency officials confirmed Monday.`,
            },
            {
                Name: 'Panama disease incursion in North Queensland 2015',

                Main_Query: `A research project to trial banana plants that could tolerate Panama Disease Tropical Race 4 has been thwarted by another plant disease, Banana Freckle.

Panama Tropical Race 4 (TR4) completely devastated the Northern Territory's banana industry in the 1990s and has now been found on a banana farm in far north Queensland.`,
            },
            {
                Name: 'EARLY MORTALITY SYNDROME in SHRIMP [2010 and ongoing]',

                Main_Query: `ORIGINAL SUMMARY

This new disease has been known as early mortality syndrome and is now commonly referred to as acute hepatopancreatic degenerative necrotic syndrome (AHDNS). Mass mortailty of shrimp from AHDNA has been reported in China (2009), Vietnam (2010) and Malaysia (2011). In June 2011, provinces of the Mekong Delta suffered unprecedented losses with tiger shrimp in 40,000 hectares of farm area affected. Over 11,000 hectares of shrimp farms in Bac Lieu have been destroyed. In 6,200 hectares of shrimp farms in In Tra Vinh, about 330 million shrimp have died causing a loss of over VND12 billion. In Soc Trang, 20,000 out of 25,000 hectares of shrimp farms have been destroyed, causing VND1.5 trillion (US$75 million) in losses. Initial evidence led investigators to beleive the disease was caused from microsporidiosis of the hepatopancreas. Relavent reference in the scientific literature may be; Kasetsart J. (2009). The Effects of Microsporidian (Thelohania) Infection on the Growth and Histopathological Changes in Pond-reared Pacific White Shrimp (Litopenaeus vannamei). Nat. Sci. 43: 680 - 688. These views maybe changing with the disease now possibly related to liver necrosis. In Mekong Delta of Vietnam, AHDNA has been associated with the use of pesticides.`,
            },
            {
                Name: 'Oyster herpes OsHV-1 µvar goes global [2010 - ?]',

                Main_Query: `OsHV-1 µvar is spreading around the world. The global spread started with an outbreak in France in 2008. Since then, there have been the following outbreaks: UK 2010 New Zealand 2010 Australia 2010 Netherlands 2011 USA 2011 (OsHV-1) Spain 2011 Japan ? The spread of OsHV-1 µvar around different parts of the world where pacific oysters are grown was forecast by using some of the information found in the AquaticHealth.net database. The forecasts were made with the consideration that OsHV-1 µvar was always present in the oyster population at very low levels. This may not be wholly accurate, and it raises more questions than answers, but it was effective. And supplying spat from hatcheries is like playing Russian roulette. This means any region receiving spat from a hatchery is at risk of an outbreak when the right conditions prevail e.g. Tasmania (ED UPDATE Jan 2016: too late for Tas, prediction is correct and has played out), South Australia (next cab off the rank when temperatures are just right?). Possible solutions: better hatchery biosecurity...`,
            },
            {
                Name: 'Huanglongbing in Central and South America',

                Main_Query: `Uruguay extreme controls to prevent the onset of disease in the citrus Huanglongbing. Nurseries, plantations are inspected and entry of all plant material is prevented from Brazil and Argentina. While the increase border controls to prevent the entry of any plant material, the Ministry of Livestock, Agriculture and Fisheries promotes agreements with citrus enterprises looking to increase inspections of nurseries and crops, to cases of Huanglongbing (HLB) in citrus Argentina. The disease came to Concordia and is generating conflict between Argentine growers and health authorities. It is caused by a bacterium (Candidatus liberobacter asiaticus) and the main vector of transmission are plants without certification of origin (it spreads by buds, grafts, tools, etc.).`
            },
            {
                Name: '2013 -2014 Citrus greening (USA) emergency',

                Main_Query: `Years ago it was citrus canker ravaging groves. The latest natural blight is bacteria called “citrus greening”—and it’s already cost growers millions.

There’s still no real cure for greening, but growers have been inundating their groves with pesticides, which is providing some relief.

However, these pesticides are causing trouble for beekeepers who are also trying to weather some tough environmental stresses.

Harold Curtis has been growing juice oranges in his grove near Fort Myers for almost two decades.  He said he was first a beekeeper. Producing honey has been in his family for generations, but several bad years led Curtis to leave beekeeping for orange groves. Now, “citrus greening” has hit that business hard.`
            },
            {
                Name: 'Following EUS in Africa',

                Main_Query: `February 2011 Epizootic Ulcerative Syndrome (EUS) is spreading in Africa

      The Republic of South Africa is the 4th African country to report the epizootic ulcerative syndrome (EUS) on its territory, following earlier notifications by Botswana, Namibia and Zambia. This disease of fresh-water (fin)fish affects a large number of species and is caused by a fungus (oomycete) Aphanomyces invadans. While the three previous discoveries all occurred in the Chobe-Zambezi river basin, this new discovery was made in the far south of South Africa, in a dam on the Palmiet river, close to Grabouw in the Western Cape province. Lesions were discovered in wild finfish that have been living in the dam for a long time, while recently introduced rainbow trout for a fish farming operation, remained unaffected. EUS is an OIE-listed disease. The OIE Reference Laboratory for this disease is based in Thailand (AAHRI, Bangkok), but a laboratory twinning programme is underway with the University of Zambia (UNZA) . The FAO has produced an information leaflet regarding this disease, which is now also available in French, thanks to the financial support of the OIE Sub-regional Representation for Southern Africa, based in Botswana, one of the affected countries`
            },
            {
                Name: 'Chronic Wasting Disease Norway 2016 /EU? - Emerging',

                Main_Query: `This is the first detection of CWD in Europe and in reindeer. Previously it had been restricted to North America (USA and Canada) and South Korea (following importation of deer/reproductive material from Canada).`
            },
            {
                Name: 'Lake Kinneret - Virus (TiLV) linked to tilapia mortalities [emerging disease Oct 2011 - ongoing]',

                Main_Query: `For over one decade many fish species from the Sea of Galilee (Lake Kinneret - Isreal) have been suspected of dying from a mysterious disease.

The disease has been found in about 15% of the lakes fish population and also in fish ponds in the Hula Valley. So far, the disease is known to affect species such as St. Peter's Fish (tilapia), silver carp, carp, and mullet.

The disease was investigated in September 2011 by Isreal's Ministry of Agriculture Veterinary Services, but at that time no pathogen had been identified. Recent Ministry of Agriculture investigations have identified the problem is worsening in tilapia, which may be linked to the discovery of a virus affecting the eye.`
            },
            {
                Name: 'Foot and mouth disease in South Korea',

                Main_Query: `On 24 July 2014, South Korea reported an outbreak of type O foot and mouth disease in a pig farm in Gyeongsangbuk-do Province to the OIE: http://www.oie.int/wahis_2/public/wahid.php/Reviewreport/Review?page_refer=MapFullEventReport&reportid=15687&newlang=en. Infection was confirmed by antigen capture ELISA and PCR. Media reports suggest that 600 pigs of 1500 on the farm have been culled so far. Media reports suggest that the pigs had not been vaccinated. Vaccination for FMD serotypes O, A and Asia 1 is practiced in South Korea.

On 28 July 2014, South Korea reported a second outbreak around 70km away in a 2000-head piggery.

In May 2014, South Korea's FMD status had been recognised by the World Organisation for Animal Health as free with vaccination.`
            },
            {
                Name: 'International trade in ornamental fish. What are the disease risks?',

                Main_Query: `Researchers from the Western Australian Department of Fisheries say that detection and characterization of viruses of the genus Megalocytivirus in ornamental fish imported into Australia is an an emerging risk to national biosecurity.

Is this an International issue?

Ornamental fish can carry many OIE listed diseases, but there are no International standards, guidelines or recommendations for the ornamental fish industry to use.`
            },
            {
                Name: 'Chile, Salmon farming, antibiotic use: 2015',

                Main_Query: `CHILE - Oceana has been granted access to information on Chile's salmon farming antibiotic use between 2009 and 2013, following a unanimous ruling by Santiago’s Court of Appeals.

“We are pleased to hear the reversal of an incorrect ruling by the Transparency Council. Clearly, this is public information as it allows people to make decisions on fundamental issues, such as health and the environment, in addition to making scrutiny on whether the Government is effectively controlling this industry or not,” stated Alex Muñoz, Vice President for Oceana in Chile.`
            },
            {
                Name: '2014 Shortage in honeybees accounted for crop failures and financial losses',

                Main_Query: `There are only enough honeybees in Britain to properly pollinate a quarter of the country’s crops, scientists claim.

Destruction of huge swathes of grassland and the use of agricultural chemicals have caused a spiralling drop in the populations of honeybees, which are vital for food production.`
            },
            {
                Name: 'HSMI in BC May 2016-emerging',

                Main_Query: `Vancouver, British Columbia - Applying newly introduced and integrated technologies, a team of international researchers, led by Fisheries and Oceans Canada’s (DFO’s) Dr. Kristi Miller, has diagnosed a potential Heart and Skeletal Muscle Inflammation in farmed Atlantic salmon samples collected from a B.C. aquaculture facility in 2013-2014. This research was undertaken as part of the Strategic Salmon Health Initiative (SSHI), a collaboration between DFO, the Pacific Salmon Foundation and Genome British Columbia to better understand the distribution of microbes and diseases in wild and cultured (hatchery and aquaculture) salmon in B.`
            },
            {
                Name: 'African bushmeat trade',

                Main_Query: `The illegal trade and sale of African bushmeat presents a number of serious biosecurity risks. In addition the trade and sale of these products has a significant impact on the maintenance of populations of protected (CITES) or endangered species.

This issue page has been created to monitor information on African bushmeat over the issue period to assist with understanding of this trade.`
            },
        ],
        Article: [
            {
                Title: 'In Cyprus, two EU experts to nodular dermatitis of cattle - Ant1 internet world',
                Body: `In Cyprus arrive this afternoon two representatives from veterinary emergency response team of the Directorate General of the European Union Health for addressing Lumpy skin disease outbreaks in cattle in the occupied territories.

   According to what sources said the Ministry of Agriculture, Cyprus reaches another expert EU partner, with full specialization in nodular dermatitis, which comes from UK agency.  With the emergence of the disease in the territories, Agriculture Minister Nick Kougialis went exceptionally in Brussels, where he met with representatives of the EU Directorate General for Health, urging action by the European Commission in terms of the issue. In justifying the need for measures, the Minister said that this disease first appears on EU territory, located in a territory in which they enable the competent services of the Republic to take measures and thirdly there is concern about whether full and thorough implementation of existing under the European and international regulations to address and reduce the spread of these zoonoses, due to the bad experience was in the past with respect to Newcastle disease outbreaks in poultry.`,
            },
            {
                Title: 'Regional impacts of PKD outbreak: Yellowstone businesses suffering after officials close popular fishing river | Fox News',
                Body: `It may be the height of fishing season in Yellowstone but local businesses are no longer booming.

On Friday, local wildlife services closed down several areas along a 183-mile stretch of the Yellowstone River while biologists try to prevent the spread of a parasite believed to have killed tens of thousands of whitefish. The parasite causes fish to contract a fatal kidney disease and die. FWP spokeswoman Andrea Jones said the disease can have a mortality rate as high as 90 percent.

The river ban isn’t just relegated to fishing—but rafting, kayaking tubing and other river activities have been banned, too.

Now Yellowstone River-based businesses, like fly fishing outfitters and raft guides, that rely on summer tourists, are scrambling to deal with the potential ramifications of a months-long dry spell.

“Everybody is kind of in shock right now, and it’s hard because we don’t have any answers,” Robin Trotter, owner of Yellowstone Raft Company, told the Bozeman Daily Chronicle.`,
            },
            {
                Title: 'Canada Detects First Case of Whirling Disease - 30 August 2016',
                Body: `You are receiving this email as you are a subscriber of TheFishSite.com.

The home of premium international fish news and information. Is this email not displaying correctly?

View it in your browser [http://www.thefishsite.com/newsletter/]. Tuesday 30th August 2016.

Lucy Towers

Editor

Canada Detects First Case of Whirling Disease

The Canadian Food Inspection Agency (CFIA) has confirmed the presence of Whirling Disease in fish in Johnson Lake in Banff National Park.

This is the  first case of whirling disease [http://www.thefishsite.com/fishnews/28115/canada-detects-first-case-of-whirling-disease/] in Canada.

Caused by the microscopic parasite Myxobolus cerebralis, infected fish swim in a whirling pattern.

Parks Canada has restricted access to Johnson Lake and prohibited water based recreational activities at the lake to reduce the risk of further spread of the disease.

Sampling and testing of fish from other water bodies in Banff National Park is underway.

In other news, the Scottish Aquaculture Innovation Centre (SAIC) is  investing nearly £250,000 `,
            },
            {
                Title: 'Imports not an issue since Panama discovery - Agriculture - Horticulture - General News - The Land',
                Body: `LONG-term implications from the detection of Panama disease Tropical Race 4 (TR4) could re-open the discussion on banana imports.

But the Federal Department of Agriculture is confident the presence of Panama disease in Australia would not have implications for fresh banana imports from other countries.

From 2000 to 2008, the banana industry fought to prevent the importation of Philippine bananas citing disease risks as the key concerns for not allowing the fruit in.

In 2008 the federal government released the Final Import Risk Analysis (IRA) Report for the Importation of Cavendish Bananas from the Philippines which gave the green light to Filipino banana imports under strict quarantine conditions.

“The Philippines will be required to demonstrate that the risk management measures can be achieved under commercial conditions on an ongoing basis,” a Department fact sheet stated.

A departmental spokesperson told Fairfax Media the department takes a stringent approach to biosecurity.`,
            },
            {
                Title: 'Symposium Xylella fastidiosa',
                Body: `This time it's something more than just a conference. Four days Gallipoli October 21 to 22, 23 to 24 October Locorotondo. The Region of Puglia promotes an important initiative to take stock of the scientific knowledge acquired so far. Objective: To identify the lines of research for possible solutions phytosanitary emergency that hit the olive trees in Salento.

The emergence of the desiccation of the olive trees that is ravaging a significant part of the territory of the province of Lecce and the discovery of the bacterium Xylella fastidiosa from quarantine pushed the Puglia Region to promote a meeting with the widest possible participation of specialists from around the world , because the problem of Xylella fastidiosa is taking all its seriousness, not only for the olive groves of the Puglia region but for the entire territory of the Community. It 'just the last few hours an interception in the Netherlands of ornamental plants from Costa Rica and found to be infected.`,
            },
            {
                Title: 'Disease causes heavy losses for shrimp farmers Vietnam',
                Body: `VIETNAM BUSINESS & ECONOMY NEWS 
 
 Home
 
 
 
 MONDAY, MAY 23, 2011
 Disease causes heavy losses for shrimp farmers 
 
 VNEconomyNews.com - Shrimp farmers in coastal provinces of the Mekong Delta are suffering unprecedented losses due to a disease that has infected tiger shrimp in 40,000 hectares of farm area.
 
 
 Pham Hoang Giang, head of the Bac Lieu Aquaculture Department, said microsporidiosis was the main cause of the losses.
 
 Right now there is no specific remedy for the disease and farmers can only prevent it by testing the breeding shrimp to make sure they are disease-free before raising them, he said.
 
 Over 11,000 hectares of shrimp farms in Bac Lieu have been destroyed, Luong Ngoc Lan, head of the provincial Department of Agriculture and Rural Development, said.
 
 In Tra Vinh, about 330 million shrimp in 6,200 hectares of farm area all over the province have died, causing a loss of over VND12 billion.
 
 In Soc Trang, 20,000 out of 25,000 hectares of shrimp farms have been destroyed, causing VND1.5 trillion (US$75 million) in losses.
 
`,
            },
            {
                Title: 'OsHV AUSTRALIA',
                Body: `Ostreid herpesvirus-1 µ variant , Australia
 Information received on 07/01/2011 from Dr Andy Carroll, Chief Veterinary Officer , Department of Agriculture, Fisheries and Forestry, Australian Government , Canberra, Australia
 Summary
 Report typeImmediate notification
 Start date24/11/2010
 Date of first confirmation of the event22/12/2010
 Report date07/01/2011
 Date submitted to OIE07/01/2011
 Reason for notificationEmerging disease
 Morbidity98 %
 Mortality98 %
 Zoonotic impactNo
 Causal agentOsHV-1 µ var DNA sequence detected in affected oysters. Causation not proven. 
 
 New outbreaks
 Summary of outbreaksTotal outbreaks: 1
 Location(s)NEW SOUTH WALES (Woolooware Bay) 
 
 Total animals affectedSpeciesSusceptibleCasesDeathsDestroyedSlaughtered
 Pacific oyster (Crassostrea gigas)**
 
 Outbreak statisticsSpeciesApparent morbidity rateApparent mortality rateApparent case fatality rateProportion susceptible animals lost* 
 Pacific oyster (Crassostrea gigas)********
 
 * Removed from the susceptible population through death, destruction and/or slaughter
 ** Not calculated because of missing information
 
 Epidemiology
`,
            },
            {
                Title: 'Unite in the fight against HLB - Elentrerios.com',
                Body: `They form an inter-agency technical working between agencies of the three levels of government and the institutions citricultoras Entre Rios. Here we tell you your goals. Post your comment

Birth of a new partnership between the public and private sectors to combat the spread of HLB (Huanglongbing).

The overall objective of the participating institutions is to create an inter-agency technical work and define the specific technical strategies for the generation of a program that addresses the health emergencies of citrus and strengthen public-private institutional unit.

They will do so under the coordination of the National Health Service and Food Quality (SENASA), "towards unifying control measures, training and dissemination of necessary to combat HLB (Huanglongbing) measures," said a statement sent to Concord .elentrerios.com from Citrus Federation of Entre Rios (FeCiER).`,
            },
            {
                Title: 'Citrus Greening Disease',
                Body: `By the spring of 2006, Maury Boyd had grown used to dealing with catastrophe. At 13, he had started working for McKinnon Corporation, his stepfather's...

CENTERVILLE, Calif. (AP) -- On a bright July morning, Adam Marler punched locations into a GPS device and set off in his pickup truck from Fresno into...`,
            },
            {
                Title: 'South African fish threatened by mystery disease | Droplets',
                Body: `GreenTimes reports on a fungal fish disease that appears to be geographically widespread. Epizootic Ulceritic Syndrome (EUS) has been reported in the following waters:

 Theewaterskloof Dam, Buffelsjagts and Arabie Dam in the Western Cape and, more recently, in Hartbeespoort and the Vaal Dam in Gauteng. It has also been reported in Zimbabwe, the Upper Zambezi and the Okavango Rivers for a couple of years.

 Droplets can add that we have seen these symptoms in Rietvlei Dam (Pretoria, Gauteng).

 The occurrence over such a wide area may well have to do with the indiscriminate relocatio`,
            },
            {
                Title: 'Deadly animal prion disease appears in Europe',
                Body: `A highly contagious and deadly animal brain disorder has been detected in Europe for the first time. Scientists are now warning that the single case found in a wild reindeer might represent an unrecognized, widespread infection.

Chronic wasting disease (CWD) was thought to be restricted to deer, elk (Cervus canadensis) and moose (Alces alces) in North America and South Korea, but on 4 April researchers announced that the disease had been discovered in a free-ranging reindeer (Rangifer tarandus tarandus) in Norway. This is both the first time that CWD has been found in Europe and the first time that it has been found in this species in the wild anywhere in the world.

“It’s worrying — of course, especially for animals. It’s a nasty disease,” says Sylvie Benestad, an animal-disease researcher at the Norwegian Veterinary Institute in Oslo who, along with colleague Turid Vikøren, diagnosed the diseased reindeer.

A key question now is whether this is a rare — even unique — case, or if the disease is widespread but so far undetected in Europe.`,
            },
        ]
    }


};
// end data base


// view search

/******************** view Articles ***********************/
class ListArticlesItem extends React.Component {
// export in SearchResultCategoryRight point 1.

    render() {

        return (

            <li className="list-group-item" id="">
                <div className="media">
                    <div className="media-left">
                        <a href="#">
                            <img className="media-object"
                                 src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5k
                                 YWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGh
                                 laWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3
                                 VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZ
                                 SBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2lt
                                 c2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNTdiMzEzM2Z
                                 jMiB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldG
                                 ljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlP
                                 jwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1N2IzMTMzZmMyIj48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZp
                                 bGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxMy44NzUiIHk9IjM2LjUiPjY0eDY0PC90ZXh0PjwvZz48L2c+PC9
                                 zdmc+"
                                 alt=""/>
                        </a>
                    </div>
                    <div className="media-body">
                        <a href="" className="media-heading" id=""><h4>{this.props.dataListArticles.Title}</h4></a>
                        {/* max lenght string 100 char */}
                        {this.props.dataListArticles.Body.substring(0, 100) + '...'}
                    </div>
                </div>
            </li>
        );
    }
}


class SearchResultCategoryRight extends React.Component {
//export in SearchResultView point 2.

    render() {

        let HTML_Div_Category_Right = []; //
        let lengthDataArticles = (this.props.dataArticles.length > 5) ? 5 : this.props.dataArticles.length;
        for (let iterator = 0; iterator < lengthDataArticles; iterator++) {
            /* 1. list articles*/
            HTML_Div_Category_Right.push(
                <ListArticlesItem dataListArticles={this.props.dataArticles[iterator]}/>
            );
            /* end 1. */
        }

        return (
            <div id="category_right" className="col-sm-6 col-md-6 col-lg-6  ">
                <div className="category_name list-group">
                    <p className="list-group-item">
                        <span >
                        Articles (Found {this.props.dataArticles.length} items) </span>
                        {/* if items size is not > 5 button hide */}
                        {(this.props.dataArticles.length > 5) ?
                            <button type="button" className="btn btn-default" id="">View All</button> : null}

                    </p>
                    <ul className="">
                        {HTML_Div_Category_Right}
                    </ul>
                </div>
            </div>

        );
    }
}
/******************* .end view Articles *******************/


/****************** view block category left and he components *****************************/

class ListGroupItem extends React.Component {
// export in SearchResultCategoryLeft point 1.
    render() {

        let HTML_Li_Items = [];
        let lenghtPropsDataListName = (this.props.dataListName.length > 5) ? 5 : this.props.dataListName.length;

        for (let iterator = 0; iterator < lenghtPropsDataListName; iterator++) {

            HTML_Li_Items.push(<li className="list-group-item" key={iterator} id="">
                {/* max lenght string is 45 char */}
                {(this.props.dataListName[iterator].Name.length > 45) ?
                this.props.dataListName[iterator].Name.substring(0, 45) + '...' :
                    this.props.dataListName[iterator].Name}
                <button type="button" className="btn btn-default btn-xs" id="">View</button>
            </li>)
        }
        return (
            <ul className="">
                {HTML_Li_Items}
            </ul>
        );
    }
}


class SearchResultCategoryLeft extends React.Component {
//export in SearchResultView point 1.

    render() {
        let HTML_Div_Category_Name = [];
// Object.keys(this.props.dataCategory).length - 1 / - Articles
        for (let iterator = 0, lenCategory = Object.keys(this.props.dataCategory).length - 1; iterator < lenCategory; iterator++) {

            HTML_Div_Category_Name.push(<div className="category_name list-group">
                <p className="list-group-item">
                            <span>
                                {Object.keys(this.props.dataCategory)[iterator]} (
                                Found {this.props.dataCategory[
                                Object.keys(this.props.dataCategory)[iterator]].length} items)
                            </span>
                    {/* if items size is not > 5 button hide */}
                    {(this.props.dataCategory[
                        Object.keys(this.props.dataCategory)[iterator]].length > 5) ?
                        <button type="button" className="btn btn-default">View All</button> : null}

                </p>
                {/* 1. list groups item  */}
                <ListGroupItem dataListName={this.props.dataCategory[Object.keys(this.props.dataCategory)[iterator]]}/>
                {/* end 1. */}
            </div>);

        }

        return (
            <div id="category_left" className="col-sm-6 col-md-6 col-lg-6 ">

                {HTML_Div_Category_Name}

            </div>

        );
    }
}

/****************** .end view left block category *****************************/

/**************** view search result block *****************/
class SearchResultView extends React.Component {
// export in App point 1.

    render() {

        return (
            <div className="col-sm-12 col-md-12 col-lg-12 category " id="category">

                {/* 1. element category left*/}
                <SearchResultCategoryLeft dataCategory={this.props.category}/>
                {/* end 1.*/}
                {/* 2. element category right articles */}
                <SearchResultCategoryRight dataArticles={this.props.category.Article}/>
                {/* end 2.*/}
            </div>

        );
    }
}
/******************** .end view search result block *************************/

/********************** view root element ************************************/
class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
//getInitialState
            data: {
                category: {
                    Theme: [],
                    Group: [],
                    Issue: [],
                    Searches: [],
                    Article: []
                }
            },
            textInput: '',

            idElementKeyDownChoice: -1

        }
    }

    lenghtTextInput() {
        // this function to verify length textInput
// min 3 chars
        return (this.state.textInput.length > 2);
    }

    hideElement(event) {
        if (!event.target.matches('#category, #category *') && !event.target.matches('input[name="search-text"]')) {

            document.getElementById('category').style.display = 'none';
        }
    }

    handleKeyDownEsc(event) {

        if (event.keyCode === 27) {

            document.getElementById('category').style.display = 'none';
        }

    }

    componentWillMount() {
        // if click outside or key press 'Esc' hide category
        document.addEventListener("click", this.hideElement, false);
        document.addEventListener("keydown", this.handleKeyDownEsc, false);
    }

    componentDidUpdate() {

        if (document.getElementById("category")) {

// show element id 'category'
            if (document.getElementById('category').style.display === 'none') {
                document.getElementById('category').style.display = 'block';

            }
        }
    }

    handelClickButtonSearch() {
// empty

    }

    handleChangeInput(event) {

        this.state.textInput = event.target.value;

        this.setState({
            textInput: this.state.textInput,
            idElementKeyDownChoice: -1
        });


// search function
        const searchTextInData = (text) => {

            this.setState({
                data: {
                    category: {
                        Theme: this.state.data.category.Theme.splice(0),
                        Group: this.state.data.category.Group.splice(0),
                        Issue: this.state.data.category.Issue.splice(0),
                        Searches: this.state.data.category.Searches.splice(0),
                        Article: this.state.data.category.Article.splice(0)
                    }
                }

            });
// min 3 char
            if (this.lenghtTextInput()) {
                let textLowerCase = text.toLowerCase();

                for (let iteratorDefault = 0, lenDATA = Object.keys(Data.category).length; iteratorDefault < lenDATA; iteratorDefault++) {
                    // Object.keys(Data.category) === ["Theme", "Group", "Issue", "Searches", "Article"]
                    // loop repeat 5 times
                    //Object.keys(Data.category)[iteratorDefault] === key;
                    if (Object.keys(Data.category)[iteratorDefault] === 'Theme') {


                        //Object.keys(Data.category[Object.keys(Data.category)[iteratorDefault]]).length === 17
                        for (let iteratorThemes = 0, lenThemes = Object.keys(Data.category[Object.keys(Data.category)[iteratorDefault]]).length;
                             iteratorThemes < lenThemes; iteratorThemes++) {

                            // Object.keys(Data.category[Object.keys(Data.category)[iteratorDefault]][iteratorThemes]) === ["Name", "Description"]
                            for (let iteratorThemesParts = 0, lenThemesParts = Object.keys(Data.category[Object.keys(Data.category)[iteratorDefault]][iteratorThemes]).length;
                                 iteratorThemesParts < lenThemesParts; iteratorThemesParts++) {

                                let stringLowerCase = Data.category[Object.keys(Data.category)[iteratorDefault]][iteratorThemes]
                                    [Object.keys(Data.category[Object.keys(Data.category)[iteratorDefault]][iteratorThemes])[iteratorThemesParts]].toLowerCase();

                                if (stringLowerCase.indexOf(textLowerCase) !== -1) {

// Data.category[Object.keys(Data.category)[iteratorDefault]][iteratorThemes] === found
                                    this.state.data.category.Theme.push(Data.category[Object.keys(Data.category)[iteratorDefault]][iteratorThemes]);

                                    // if found return;
                                    iteratorThemesParts++;
                                }
                            }
                        }
                    }
                    else if (Object.keys(Data.category)[iteratorDefault] === 'Group') {


                        for (let iteratorGroup = 0, lenGroup = Object.keys(Data.category[Object.keys(Data.category)[iteratorDefault]]).length;
                             iteratorGroup < lenGroup; iteratorGroup++) {


                            let stringLowerCase = Data.category[Object.keys(Data.category)[iteratorDefault]][iteratorGroup].Name.toLowerCase();

                            if (stringLowerCase.indexOf(textLowerCase) !== -1) {

                                this.state.data.category.Group.push(Data.category[Object.keys(Data.category)[iteratorDefault]][iteratorGroup]);

                            }
                        }
                    }
                    else if (Object.keys(Data.category)[iteratorDefault] === 'Issue') {


                        for (let iteratorIssue = 0, lenIssue = Object.keys(Data.category[Object.keys(Data.category)[iteratorDefault]]).length;
                             iteratorIssue < lenIssue; iteratorIssue++) {


                            let stringLowerCase = Data.category[Object.keys(Data.category)[iteratorDefault]][iteratorIssue].Name.toLowerCase();

                            if (stringLowerCase.indexOf(textLowerCase) !== -1) {

                                this.state.data.category.Issue.push(Data.category[Object.keys(Data.category)[iteratorDefault]][iteratorIssue]);

                            }
                        }
                    }
                    else if (Object.keys(Data.category)[iteratorDefault] === 'Searches') {

                        for (let iteratorSearches = 0, lenSearches = Object.keys(Data.category[Object.keys(Data.category)[iteratorDefault]]).length;
                             iteratorSearches < lenSearches; iteratorSearches++) {

                            for (let iteratorSearchesParts = 0, lenTSearchesParts = Object.keys(Data.category[Object.keys(Data.category)[iteratorDefault]][iteratorSearches]).length;
                                 iteratorSearchesParts < lenTSearchesParts; iteratorSearchesParts++) {

                                let stringLowerCase = Data.category[Object.keys(Data.category)[iteratorDefault]][iteratorSearches]
                                    [Object.keys(Data.category[Object.keys(Data.category)[iteratorDefault]][iteratorSearches])[iteratorSearchesParts]].toLowerCase();

                                if (stringLowerCase.indexOf(textLowerCase) !== -1) {

                                    this.state.data.category.Searches.push(Data.category[Object.keys(Data.category)[iteratorDefault]][iteratorSearches]);

                                    // if found return;
                                    iteratorSearchesParts++;
                                }
                            }
                        }
                    }
                    else if (Object.keys(Data.category)[iteratorDefault] === 'Article') {

                        for (let iteratorArticle = 0, lenArticle = Object.keys(Data.category[Object.keys(Data.category)[iteratorDefault]]).length;
                             iteratorArticle < lenArticle; iteratorArticle++) {


                            for (let iteratorArticleParts = 0, lenArticleParts = Object.keys(Data.category[Object.keys(Data.category)[iteratorDefault]][iteratorArticle]).length;
                                 iteratorArticleParts < lenArticleParts; iteratorArticleParts++) {

                                let stringLowerCase = Data.category[Object.keys(Data.category)[iteratorDefault]][iteratorArticle]
                                    [Object.keys(Data.category[Object.keys(Data.category)[iteratorDefault]][iteratorArticle])[iteratorArticleParts]].toLowerCase();

                                if (stringLowerCase.indexOf(textLowerCase) !== -1) {

                                    this.state.data.category.Article.push(Data.category[Object.keys(Data.category)[iteratorDefault]][iteratorArticle]);

                                    // if found return;
                                    iteratorArticleParts++;
                                }
                            }
                        }
                    }
                }
            }

            this.setState({
                data: this.state.data
            });


        };

        searchTextInData(this.state.textInput);

    }


    handleKeyDown(event) {
// Up - 38 ; Down - 40;


        if (!(this.lenghtTextInput())) return;
        var key = event.keyCode;

        if (key !== 40 && key !== 38 && key !== 13) return;
        else {

            const moveUpOrDown = (key) => {

// all items length
                let lengthAllElementButton = document.querySelectorAll('.category .list-group-item, .form_block input').length - 1;// - 1;

// this 5 is lenght category without items + 1 input = 6
                if (lengthAllElementButton < 6) return;

// idElementKeyDownChoice = -1  is default value
                if (this.state.idElementKeyDownChoice !== -1/*-1*/) {
// delete id old choice

                    // delete id active *
                    document.querySelectorAll('.category .list-group-item, .form_block')[this.state.idElementKeyDownChoice].id = '';
                    // delete button || h4 || input id active *
                    if (document.getElementById('active-button')) {
                        document.getElementById('active-button').id = '';
                    }
                }

                if (key === 40) {
// if last => first
                    if (this.state.idElementKeyDownChoice === lengthAllElementButton) {
                        this.state.idElementKeyDownChoice = 0;
                    } else {
                        // skip if first is input
                        // -1 is default state
                        if (this.state.idElementKeyDownChoice === -1) {
                            this.state.idElementKeyDownChoice = 1;
                        } else {
                            this.state.idElementKeyDownChoice++;
                        }


                    }

                } else {
// if key === 38
// if first => last
                    if (this.state.idElementKeyDownChoice === 0) {
                        this.state.idElementKeyDownChoice = lengthAllElementButton;
                    } else {
                        this.state.idElementKeyDownChoice--;
                    }

                }

                this.setState({
                    idElementKeyDownChoice: this.state.idElementKeyDownChoice
                });


// if there not is button 'view all' or div class='media'
// if childNodes.length === 1 this element not have button 'View All'
// childNodes.length === 0 this is input
// childNodes.length === 4 this element have button 'View All'
                if (document.querySelectorAll('.category .list-group-item, .form_block input')[this.state.idElementKeyDownChoice].childNodes.length !== 1 ||
                    document.querySelectorAll('.category .list-group-item, .form_block input')[this.state.idElementKeyDownChoice].childNodes[0].className === 'media'
                ) {
// add id element li
                    document.querySelectorAll('.category .list-group-item, .form_block')[this.state.idElementKeyDownChoice].id = 'active-item';

// this document.querySelectorAll('')[0] find button
                    document.querySelectorAll('#active-item .btn, #active-item .media-heading, #active-item input')[0].id = 'active-button';
                }
                else {
                    moveUpOrDown(key);
                }

            };

// Enter key
            if (key === 13) {
                //event.preventDefault();

                console.log(document.getElementById('active-button'));
                document.getElementById('active-button').click();

            } else {
                // key === 40 or 38
                moveUpOrDown(key);

                document.querySelectorAll('#active-button')[0].focus();

            }

        }

    }


    render() {

        let HTML_SearchResultView;
        // min 3 char
        if (this.lenghtTextInput()) {
            HTML_SearchResultView = <SearchResultView category={this.state.data.category}/>;

        }

        return (
            <div className="container">

                <div className="row" onKeyDown={this.handleKeyDown.bind(this)}>

                    <div className="col-sm-12 col-md-12 col-lg-12 form_block"
                         id=""
                    >

                        <input type="text" name="search-text" id="" className="form-control"
                               onChange={this.handleChangeInput.bind(this)}

                        />

                        <button type="button" className="btn btn-default search "
                                onClick={this.handelClickButtonSearch.bind(this)}>Search
                        </button>

                    </div>

                    {/* 1. view search result */}
                    {HTML_SearchResultView}
                    {/* end 1. */}


                </div>
                <div id="lorem">

                </div>
            </div>
        );
    }
}
/********************** .end view root element ************************************/



ReactDOM.render(<App />, document.getElementById('root'));


/*
 Note:
 -



 */