import { Search, Menu, Bell } from "lucide-react";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Button } from "../../ui/button";

export function UserActions() {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-white relative rounded-full overflow-hidden flex-1">
        <Label
          htmlFor="search"
          className="absolute top-1/2 left-2 -translate-y-1/2"
        >
          <Search className="w-4 h-4" />
          <span className="sr-only">Search box</span>
        </Label>
        <Input
          id="search"
          type="search"
          placeholder="Search..."
          className="pl-8"
        />
      </div>
      <Button variant="ghost" className="p-2">
        <Bell className="h-4 w-4 text-white" />
        <span className="sr-only">Notifications button</span>
      </Button>
      <Button variant="ghost" className="p-2">
        <Menu className="h-4 w-4 text-white" />
        <span className="sr-only">Expand Menu button</span>
      </Button>
    </div>
  );
}
