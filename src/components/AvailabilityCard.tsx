
import { Card, CardContent } from "@/components/ui/card";

const AvailabilityCard = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-3">Availability</h3>
        <p className="text-gray-700 mb-3">
          I'm currently available for freelance projects, full-time positions, and consulting opportunities.
        </p>
        <div className="bg-green-50 p-3 rounded-md border border-green-200">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="text-green-800 font-medium">Available for hire</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AvailabilityCard;
