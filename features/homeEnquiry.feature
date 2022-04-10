Feature: Home Enquiry Form
    @Regression
    Scenario Outline: User able to fill the home iquiry form
        Given as a user I naviate to "https://insurance.policyexpert.co.uk/home"
        When I select Title as "<Title>"
        And I enter first name
        And I enter last name
        And I select the date for date of birth as "<date>"
        And I select the month for date of birth as "<month>"
        And I select the year for date of birht as "<year>"
        And I select the marital status as "<status>"
        And I enter occupation as "<occupation>"
        And I select the option for occupation question as "<otherOccupation>"
        And I enter the mobile phone number as "<PhoneNumber>"
        And I enter email address as "<EmailId>"
        And I select the option for criminal record as "<record>"
        And I select the property address as "<Address>"
        And I select the option for correspondence address
        And I select the property type as "<PropertType>"
        And I select the property description as "<Description>"
        And I enter property built year as "<builtYear>"
        And I select the number of bedrooms as "<bedrooms>"
        And I select the number of toilet rooms as "<rooms>"
        And I select the option for main residence
        And I select the own property option as "<propertyOpts>"
        And I select for property occupied by as "<occupiedProperty>"
        And I select for number of adults at property as "<adult>"
        And I select for number of children at property as "<children>"
        And I select the smoking option
        And I select the option for when normally property occupied as "<whenOccupied>"
        And I select the tree option
        And I select the flat roof option
        And I select the wall option
        And I select the roof option
        And I select the property maintain option
        And I select the property safty option
        And I select the window secured option
        And I select the property self contained option
        And I select the french door option
        And I select the external door option
        And I select the alaram option
        And I select the joint placeholder option
        And I select the years for consecutive insurance as "<insuranceYear>"
        And I select the insurance claim for last three years option
        And I select the insurance start date
        And I select the home insurance type as "<insuranceType>"
        And I enter current property value as "<propertyValue>"
        And I select the accidental damage cover option
        And I select the standard excess as "<standardExecess>"
        And I click on go to compare quotes button
        Then I can view the quote message as "<message>"
        Examples:
            | Title | date | month | year | status  | occupation        | otherOccupation | PhoneNumber | EmailId                 | record | Address                                              | PropertType | Description   | builtYear | bedrooms | rooms | propertyOpts | occupiedProperty | adult | children | whenOccupied          | insuranceYear | insuranceType | propertyValue | standardExecess | message                   |
            | mr    | 20   | 3     | 1988 | married | Software Engineer | No              | 0791659125  | vketipisz@qmetric.co.uk | No     | Policy Expert Ltd, 110 Bishopsgate, London, EC2N 4AY | house       | semi_detached | 1918      | 3        | 1     | mortgaged    | you_and_family   | 2     | 1        | occupied_during_night | 2_years       | buildings     | 500000        | 300             | Sorry, quotes unavailable |
