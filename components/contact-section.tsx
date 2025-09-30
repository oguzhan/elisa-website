import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  return (
    <section className="bg-white py-20" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left content */}
          <div className="animate-in fade-in-0 slide-in-from-left-8 duration-700">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">Let's create amazing stuff together!</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              I'm always excited to work on new projects and collaborate with amazing people. Whether you have a
              specific project in mind or just want to explore possibilities, I'd love to hear from you.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📧</span>
                <span className="text-gray-700">elisa@elisahertzler.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📱</span>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="animate-in fade-in-0 slide-in-from-right-8 duration-700 delay-200">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <Input placeholder="John" className="transition-all duration-200 focus:scale-105" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <Input placeholder="Doe" className="transition-all duration-200 focus:scale-105" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  className="transition-all duration-200 focus:scale-105"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <Textarea
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="transition-all duration-200 focus:scale-105"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-black text-white hover:bg-gray-800 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
