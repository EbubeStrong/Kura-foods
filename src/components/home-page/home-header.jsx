import { ChooseLocation } from "./header-ui/choose-location";
import { UserActions } from "./header-ui/user-actions";
import { DonationCategories } from "./header-ui/donation-categories";

export function HomeHeader() {
  return (
    <section className="bg-primary-200 px-2 py-4 space-y-4 rounded-b-2xl">
      <ChooseLocation />
      <UserActions />
      <DonationCategories />
    </section>
  );
}
