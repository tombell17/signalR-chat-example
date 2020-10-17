using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

public class ChatHub : Hub
{
    public async Task SendMessage(Message message)
    {
        await Clients.All.SendAsync("SendMessage", message);
    }      
}