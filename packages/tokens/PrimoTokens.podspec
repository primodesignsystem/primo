Pod::Spec.new do |s|
    s.name             = 'PrimoTokens'
    s.version          = '0.0.0'
    s.summary          = 'Primo Design System tokens'
    s.homepage         = 'https://github.com/primo-design-system/primo'
    s.platform = :ios
    s.ios.deployment_target = '13.2'
    s.source_files = ['build/premier/tokens.swift', 'build/prima/tokens.swift', 'build/primo/tokens.swift']
    s.license = { :type => "MIT" }
    s.author = { "BT" => "richard@mccartney.io" }
    s.source = { :git => "https://github.com/primodesignsystem/primo.git",
                 :tag => "#{s.version}" }
    s.frameworks = 'UIKit'
  end