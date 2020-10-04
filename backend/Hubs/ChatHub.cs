using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

public class ChatHub : Hub<IChatClient>
{
    public async Task SendMessage(string user, string message)
    {
        await Clients.All.SendMessage(user, message);
    }
    public async Task SendPrivateMessage(string user, string reciever, string message)
    {
        await Clients.All.SendMessage(user, message);
    }
}