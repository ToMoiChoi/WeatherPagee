"use client";

import CityPicker from "@/components/CityPicker";
import { Card, Text, Subtitle, Divider } from "@tremor/react";
export default function Home() {
  return (
    <div className="bg-gradient-to-br from-[#394F68] to-[#183B7E] flex min-h-screen flex-col items-center justify-center p-10 ">
      <Card className="max-w-4xl mx-auto">
        <Text className="text-6xl font-bold text-center mb-10">Weather AI</Text>
        <Subtitle className="text-xl text-center">
          The website prowered by OpenAi,NextJS
        </Subtitle>
        <Divider className="my-10" />
        <Card className="bg-gradient-to-br from-[#394F68] to-[#183B7E]">
          {/* CityPicker */}
          <CityPicker />
        </Card>
      </Card>
    </div>
  );
}
