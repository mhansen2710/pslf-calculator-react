import React from 'react';
import FloatInput from '../../Inputs/FloatInput';
import IntegerCounterInput from '../../Inputs/IntegerCounterInput';

const YearPlanInfoForm = (props) => {
    const generateYearPlanTable = () => {
        let yearRows = [];
        yearRows.push(
            <div className="yearplan-header-row" key="yearplan-header-row">
                <label className="yearplan-header">Year</label>
                <label className="yearplan-header">Family Size</label>
                <label className="yearplan-header">Income</label>
                { props.isMarried.toString() === 'true' 
                    ? <label className="yearplan-header">Spouse Income</label>
                    : "" 
                }
            </div>
        )
        for (let i = 0; i < props.yearInfo.yearPlan.length; i++) {
            yearRows.push(
                <div className="yearplan-row" key={props.yearInfo.yearPlan[i].year + '-' + i}>
                    <label className="yearplan-lbl">{props.yearInfo.yearPlan[i].year}</label>
                    <IntegerCounterInput 
                        name='familySize' 
                        index={i}
                        value={props.yearInfo.yearPlan[i].familySize} 
                        onClick={props.update} 
                        key={`yearplan_family_size-${i}`} 
                        label=""
                        max={20}
                        min={0}
                        valid={props.yearInfo.formValidation.yearPlan[i].familySize}
                    />
                    <FloatInput 
                        form="yearPlan"
                        label=""
                        value={props.yearInfo.yearPlan[i].agi}
                        name='agi'
                        key={`yearplan_agi-${i}`} 
                        index={i}
                        onChange={props.update} 
                        valid={props.yearInfo.formValidation.yearPlan[i].agi}
                    />
                    { props.isMarried.toString() === 'true' 
                        ? <FloatInput 
                            form="yearPlan"
                            label=""
                            value={props.yearInfo.yearPlan[i].spouseAgi}
                            name='spouseAgi'
                            key={`yearplan_spouse_agi-${i}`} 
                            index={i}
                            onChange={props.update} 
                            valid={props.yearInfo.formValidation.yearPlan[i].spouseAgi} />
                        : "" 
                    }

                </div>  
            );
        }
        return yearRows;
    }

    return (
        <section>
            { generateYearPlanTable() }
        </section>
    )
}

export default YearPlanInfoForm;