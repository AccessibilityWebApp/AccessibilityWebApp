import React, { useState } from 'react';

export const ExpertSignUpController = () => {
    const [selectedTypesApproach, setSelectedTypesApproach] = useState([]);
    const [selectedTypesSoort, setSelectedTypesSoort] = useState([]);
    const [selectedTypesType, setSelectedTypesType] = useState([]);
    const maxTypesAllowed = 4;

    const handleTypeChange = (event) => {
        const selectedType = event.target.value;

        if (!selectedTypesType.includes(selectedType) && selectedTypesType.length < maxTypesAllowed) {
            setSelectedTypesType([...selectedTypesType, selectedType]);
            event.target.value = "";
        }
    };

    const handleSoortChange = (event) => {
        const selectedSoort = event.target.value;

        if (!selectedTypesSoort.includes(selectedSoort) && selectedTypesSoort.length < maxTypesAllowed) {
            setSelectedTypesSoort([...selectedTypesSoort, selectedSoort]);
            event.target.value = "";
        }
    };

    const handleApproachChange = (event) => {
        const selectedApproach = event.target.value;

        if (!selectedTypesApproach.includes(selectedApproach) && selectedTypesApproach.length < maxTypesAllowed) {
            setSelectedTypesApproach([...selectedTypesApproach, selectedApproach]);
            event.target.value = "";
        }
    };

    const handleRemoveType = (type, arraySetter) => {
        const newSelectedTypes = [...arraySetter];
        const index = newSelectedTypes.indexOf(type);
        if (index !== -1) {
            newSelectedTypes.splice(index, 1);
            arraySetter(newSelectedTypes);
        }
    };

    const [showAdditionalBoxes, setShowAdditionalBoxes] = useState(false);

    const handleAgeChange = (event) => {
        const selectedAge = event.target.value;
        setShowAdditionalBoxes(selectedAge === "18-");
    };

    return {
        selectedTypesApproach,
        selectedTypesSoort,
        selectedTypesType,
        handleTypeChange,
        handleSoortChange,
        handleApproachChange,
        handleRemoveType,
        showAdditionalBoxes,
        handleAgeChange,
    };
};

export default ExpertSignUpController;