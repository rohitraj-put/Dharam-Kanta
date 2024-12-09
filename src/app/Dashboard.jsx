import React from "react";
import { FiMenu } from "react-icons/fi";
import { AppSidebar } from "@/components/app-sidebar";
import { Daigram } from "@/components/Daigram";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export function Dashboard() {
  return (
    <>
      <SidebarInset>
        {/* <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header> */}
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0 mt-4 overflow-x-scroll">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl shadow-sm bg-gray-100">
              <a
                class="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                href="#"
              >
                <div class="p-5">
                  <div class="flex justify-between">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-10 w-10 text-rose-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                      />
                    </svg>
                    {/* <div class="bg-rose-400 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                      <span class="flex items-center">30%</span>
                    </div> */}
                  </div>
                  <div class="ml-2 w-full flex-1">
                    <div>
                      <div class="mt-3 text-3xl font-bold leading-8">4.510</div>

                      <div class="mt-1 text-base text-gray-600">Item Sales</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="aspect-video rounded-xl shadow-sm bg-gray-100">
              <a
                class="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                href="#"
              >
                <div class="p-5">
                  <div class="flex justify-between">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-10 w-10 text-rose-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                      />
                    </svg>
                    {/* <div class="bg-rose-400 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                      <span class="flex items-center">30%</span>
                    </div> */}
                  </div>
                  <div class="ml-2 w-full flex-1">
                    <div>
                      <div class="mt-3 text-3xl font-bold leading-8">4.510</div>

                      <div class="mt-1 text-base text-gray-600">Item Sales</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="aspect-video rounded-xl shadow-sm bg-gray-100">
              <a
                class="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                href="#"
              >
                <div class="p-5">
                  <div class="flex justify-between">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-10 w-10 text-rose-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                      />
                    </svg>
                    {/* <div class="bg-rose-400 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                      <span class="flex items-center">30%</span>
                    </div> */}
                  </div>
                  <div class="ml-2 w-full flex-1">
                    <div>
                      <div class="mt-3 text-3xl font-bold leading-8">4.510</div>

                      <div class="mt-1 text-base text-gray-600">Item Sales</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="min-h-[45vh] flex-1 rounded-xl shadow-sm bg-gray-100 md:min-h-min">
            <Daigram />
          </div>
        </div>
      </SidebarInset>
    </>
  );
}
