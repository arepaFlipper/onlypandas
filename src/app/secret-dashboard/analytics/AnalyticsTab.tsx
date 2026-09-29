import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { centsToDollars } from "@/lib/utils";
import { DollarSign } from "lucide-react";
import { getDashboardData } from "../actions";

const AnalyticsTab = async () => {
  const { totalRevenue, totalSubscriptions, totalSales } = await getDashboardData();
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Total Revenue</CardTitle>
            <DollarSign className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>${totalRevenue || 0}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Sales</CardTitle>
            <DollarSign className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>+{totalSales}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Subscriptions</CardTitle>
            <DollarSign className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>+{totalSubscriptions}</div>
          </CardContent>
        </Card>
      </div>

      <div className='flex flex-wrap gap-5 my-5'>
        <RecentSubscriptions />
        <RecentSales />
      </div>
    </>
  );
};
export default AnalyticsTab;

const RecentSubscriptions = async () => {
  const recentSubscriptions = [
    {
      user: {
        name: "Luisa Agudelo",
        email: "john@email.com",
        image: "https://estaticos.elcolombiano.com/binrepository/780x570/1c0/780d565/none/11101/VOCL/luisagudelo_49955047_20260217103320.jpg",
      },
      price: 5_00,
    },
    {
      user: {
        name: "Sydney Sweeney",
        email: "Sydney_Sweeney@email.com",
        image: "https://media.vanityfair.com/photos/69c9572bbc53344f43aca193/master/w_2240,c_limit/2234938362",
      },
      price: 20_00,
    },
  ];

  return (
    <Card className='flex-1'>
      <CardHeader className='px-3'>
        <CardTitle>Recent Subscriptions</CardTitle>
      </CardHeader>
      <CardContent className='grid gap-8 px-3'>
        {recentSubscriptions.length === 0 && (
          <p className='text-sm text-muted-foreground'>No recent subscriptions</p>
        )}

        {recentSubscriptions.map((subscription) => (
          <div className='flex items-center gap-2' key={subscription.user.email}>
            <Avatar className='hidden h-9 w-9 sm:flex'>
              <AvatarImage
                src={subscription.user.image || "/user-placeholder.png"}
                alt='Avatar'
                className='object-cover'
              />
              <AvatarFallback>{subscription?.user?.name![0] || ""}</AvatarFallback>
            </Avatar>
            <div className='grid gap-1'>
              <p className='text-xs font-medium leading-none'>{subscription.user.name}</p>
              <p className='text-xs text-muted-foreground'>{subscription.user.email}</p>
            </div>
            <div className='ml-auto font-medium'>+${centsToDollars(subscription.price)}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

const RecentSales = async () => {
  const recentSales = [
    {
      user: {
        name: "Karoline Leavitt",
        email: "john@email.com",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/Official_portrait_of_Karoline_Leavitt%2C_2025_%28cropped%29%282%29.jpg/250px-Official_portrait_of_Karoline_Leavitt%2C_2025_%28cropped%29%282%29.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
      },
      price: 10_00,
    },
    {
      user: {
        name: "Shakira",
        email: "jane@email.com",
        image: "https://media.elcomercio.com/wp-content/uploads/2026/02/shakira-El-Comercio-1024x683.jpg",
      },
      price: 30_00,
    },
  ];

  return (
    <Card className='flex-1'>
      <CardHeader className='px-3'>
        <CardTitle>Recent Sales</CardTitle>
      </CardHeader>
      <CardContent className='grid gap-8 px-3'>
        {recentSales.length === 0 && <p className='text-sm text-muted-foreground'>No recent sales</p>}
        {recentSales.map((order) => (
          <div className='flex items-center gap-2' key={order.user.email}>
            <Avatar className='hidden h-9 w-9 sm:flex'>
              <AvatarImage
                src={order.user.image || "/user-placeholder.png"}
                alt='Avatar'
                className='object-cover'
              />
              <AvatarFallback>
                <p>{order?.user?.name![0] || ""}</p>
              </AvatarFallback>
            </Avatar>
            <div className='grid gap-1'>
              <p className='text-xs font-medium leading-none'>{order.user.name}</p>
              <p className='text-xs text-muted-foreground'>{order.user.email}</p>
            </div>
            <div className='ml-auto font-medium'>${centsToDollars(order.price)}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
