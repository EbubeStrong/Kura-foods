import { MapPinned } from "lucide-react";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";

export function ChooseLocation() {
  return (
    <div className="flex items-center gap-2">
      <Label htmlFor="location">
        <MapPinned className="h-4 w-4 text-white" />
        <span className="sr-only">Enter your location</span>
      </Label>
      <Input
        id="location"
        type="text"
        placeholder="Enter your location"
        className="bg-transparent placeholder:text-white border-none placeholder:font-poppins text-white"
      />
    </div>
  );
}
