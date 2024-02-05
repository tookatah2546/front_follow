import Button from "../shared/button"
import Select from "react-select"
import * as React from "react"
import { useForm } from "react-hook-form"



const FromCreateGroup = () => {

    const Quantitygroup = [
        {value: '1',label: "1"},
        {value: '2',label: "2"},
        {value: '3',label: "3"},
        {value: '4',label: "4"},
        {value: '5',label: "5"},

    ]

    const Subject = [
        {value: '1',label: "ui"},
        {value: '2',label: "test"},
        {value: '3',label: "req"},
        {value: '4',label: "4"},
        {value: '5',label: "5"},

    ]


    const {
        register,
        handleSubmit,
        setError,
        setValue,
        formState: { errors },
      } = useForm()
    
    
    const onSubmit = (data) => {
        console.log(data)
      }

    const handleSelect = (e) => {
        setValue('Quantitygroup',e.value)
        console.log("handleSelect");
        
    }

    const handleSelectSubject = (e) => {
        setValue('Subject',e.value)
        console.log("handleSelect");
        
    }

    return (
        <form className="flex flex-col border rounded-xl  px-8 pb-10 " onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4 mt-6">
                <p className="text-xl font-extrabold text-center">สร้างโปรเจกต์</p>
            </div>
            <div className="flex flex-col mt-6 mb-12  ">
            <p className="mb-5 ">ชื่อวิชา</p>
            <Select
                options={Subject}
                onChange={handleSelectSubject}
                ></Select>
                
            </div>
            <div >
                <p className=" mb-5 ">จำนวนที่ต้องการสร้างโปรเจกต์</p>
                
                <Select
                options={Quantitygroup}
                onChange={handleSelect}
                ></Select>
 
            </div>
            <div className="border-b-2 mt-14 mb-10 border-extar-light-grey "></div>
            
            <Button color="primary" title="สร้างโปรเจกต์"/>
           
        </form>
    );
}

export default FromCreateGroup;