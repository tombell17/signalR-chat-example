using System.Threading.Tasks;

public interface IChatClient
{
    Task SendMessage(Message message);    
}