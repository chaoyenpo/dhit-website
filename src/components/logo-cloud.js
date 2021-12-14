import React from 'react'
import GcpIcon from '../images/gcp.svg'
import AwsIcon from '../images/aws.svg'
import DellIcon from '../images/dell.svg'
import AzureIcon from '../images/azure.svg'

/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
  return (
    <div className="m-12">
      <div className="bg-white rounded-xl shadow-xl max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          <div className="col-span-1 flex justify-center items-center md:col-span-3 lg:col-span-1">
            <img
              className="h-12"
              src={DellIcon}
              alt="DELL"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img className="h-12" src={GcpIcon} alt="GCP" />
          </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img className="h-12" src={AwsIcon} alt="AWS" />
          </div>
          <div className="col-span-1 flex justify-center items-center md:col-span-2 lg:col-span-1">
            <img className="h-8" src="	https://img.alicdn.com/tfs/TB13DzOjXP7gK0jSZFjXXc5aXXa-212-48.png" alt="aliyun" />
          </div>
          <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
            <img
              className="h-12"
              src={AzureIcon}
              alt="AZURE"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
