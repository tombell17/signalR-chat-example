using System.Threading.Tasks;

public interface IChatClient
{
    Task SendMessage(string user, string message);
    Task SendPrivateMessage(string user, string reciever, string message);
}