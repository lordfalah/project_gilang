"use client";

import { FancyMultiSelect } from "@/component/FancyMultiSelect";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CardsContext } from "@/utils/context/FormCards";
import { useContext } from "react";

export function CardObat({ obats, deffault }) {
  const { setData, data } = useContext(CardsContext);

  return (
    <Card className="w-full sm:w-[350px]">
      <CardHeader>
        <CardTitle>Data obat</CardTitle>
        <CardDescription>Pilih daftar obat</CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="obat" className="text-black">
                obat *
              </Label>

              <FancyMultiSelect
                datas={obats}
                setData={setData}
                deffault={deffault}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
